const suspiciousCommands = [
  "curl | bash",
  "wget | bash",
  "apt-get",
  "powershell",
  "rm -rf",
  "chmod +x",
  "sudo",
  "exec(",
  "eval(",
];

const suspiciousDomains = [
  "bit.ly",
  "tinyurl",
  "iplogger",
  "grabify",
  "shorturl",
  "t.co",
  "goo.gl",
  "ow.ly",
  "is.gd",
];

const certificateKeywords = [
  "certificate",
  "license",
  "registration",
  "issued by",
  "valid until",
  "authority",
  "signature",
  "certified",
];

const pdfSecurityTokens = [
  "/JavaScript",
  "/EmbeddedFile",
  "/Encrypt",
  "/Launch",
  "/OpenAction",
  "/AA",
  "/JS",
];

const analyzeText = (text, pdfSecurityIssues = []) => {
  const lowerText = text.toLowerCase();

  const foundCertKeywords = certificateKeywords.filter((keyword) =>
    lowerText.includes(keyword.toLowerCase())
  );
  const isCertificate = foundCertKeywords.length >= 2;

  const foundCommands = suspiciousCommands.filter((cmd) =>
    lowerText.includes(cmd.toLowerCase())
  );

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = text.match(urlRegex) || [];
  const suspiciousUrls = urls.filter((url) =>
    suspiciousDomains.some((domain) => url.includes(domain))
  );

  let riskScore = 0;
  if (foundCommands.length > 0) riskScore += 3;
  if (suspiciousUrls.length > 0) riskScore += 2;
  if (pdfSecurityIssues.length > 0) riskScore += 2;
  
  const res = {
    isCertificate,
    certificateKeywords: foundCertKeywords,
    suspiciousCommands: foundCommands,
    suspiciousUrls,
    pdfSecurityIssues,
    urls: urls.slice(0, 10),
    riskScore,
    extractedText: text.substring(0, 500),
  };
  
  return res; 
};

const scanPDF = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result;
        const text = new TextDecoder().decode(arrayBuffer);
        const securityIssues = pdfSecurityTokens.filter((token) =>
          text.includes(token)
        );
        const readableText = text.replace(/[^\x20-\x7E\n]/g, "");
        
        const analysisResult = analyzeText(readableText, securityIssues);
        resolve(analysisResult);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(new Error("File reading error: " + err));
    reader.readAsArrayBuffer(file);
  });
};

const scanImage = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const simulatedText =
          "This is a simulated OCR result. In production, tesseract.js would extract actual text from the image.";
        
        const analysisResult = analyzeText(simulatedText, []);
        resolve(analysisResult);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(new Error("File reading error: " + err));
    reader.readAsDataURL(file);
  });
};

const scanWordDocument = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const cleanText = text.replace(/[^\x20-\x7E\n]/g, "");
        
        const analysisResult = analyzeText(cleanText, []);
        resolve(analysisResult);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(new Error("File reading error: " + err));
    reader.readAsText(file);
  });
};


export const scanDocument = async (uploadedFile) => {
  if (!uploadedFile) {
    throw new Error("No file provided.");
  }
  
  const fileType = uploadedFile.type;
  const fileName = uploadedFile.name.toLowerCase();

  const supportedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const isSupportedExtension =
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".jpg") ||
    fileName.endsWith(".jpeg") ||
    fileName.endsWith(".png") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx");

  if (!supportedTypes.includes(fileType) && !isSupportedExtension) {
    throw new Error(
      "Unsupported file type. Please upload PDF, Image, or Word document."
    );
  }

  try {
    if (fileType === "application/pdf" || fileName.endsWith(".pdf")) {
      return await scanPDF(uploadedFile);
    } else if (
      fileType.startsWith("image/") ||
      fileName.match(/\.(jpg|jpeg|png)$/)
    ) {
      return await scanImage(uploadedFile);
    } else if (fileName.match(/\.(doc|docx)$/)) {
      return await scanWordDocument(uploadedFile);
    } else {
        throw new Error("Could not determine file type for scanning.");
    }
  } catch (err) {
    throw new Error(`Error scanning file: ${err.message}`);
  }
};
