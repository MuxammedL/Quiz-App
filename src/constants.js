export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export const questions = [
  {
    question: "What does SSL/TLS stand for?",
    options: {
      A: "Secure Socket Layer/Transport Layer Security",
      B: "Secure Session Layer/Transmission Layer Security",
      C: "Secure Service Layer/Transmission Layer Security",
      D: "Secure Service Layer/Trusted Layer Security",
    },
    correctAnswer: "A",
  },
  {
    question: "Which of the following is the primary purpose of SSL/TLS?",
    options: {
      A: "To ensure data integrity and confidentiality",
      B: "To provide secure authentication and encryption",
      C: "To optimize network performance and reduce latency",
      D: "To prevent unauthorized access to stored data",
    },
    correctAnswer: "B",
  },
  {
    question: "In SSL/TLS, which key is used to encrypt the communication?",
    options: {
      A: "Public Key",
      B: "Private Key",
      C: "Session Key",
      D: "User Key",
    },
    correctAnswer: "C",
  },
  {
    question:
      "What type of encryption does SSL/TLS typically use connection with server?",
    options: {
      A: "Symmetric Encryption",
      B: "Asymmetric Encryption",
      C: "SSL/TLS is not using encryption",
      D: "both A and B",
    },
    correctAnswer: "B",
  },
  {
    question:
      "Which of the following is used to verify the authenticity of a server during the SSL/TLS handshake?",
    options: {
      A: "Session Key",
      B: "Certificate Authority",
      C: "Public Key Infrastructure",
      D: "Symmetric Key",
    },
    correctAnswer: "B",
  },
  {
    question: "What is a certificate authority (CA)?",
    options: {
      A: "A device for generating encryption keys",
      B: "A trusted entity that issues digital certificates",
      C: "A server that monitors encryption traffic",
      D: "A protocol for data encryption",
    },
    correctAnswer: "B",
  },
  {
    question: "Which of the following protocols is part of the SSL/TLS family?",
    options: {
      A: "HTTPS",
      B: "FTP",
      C: "DNS",
      D: "SSH",
    },
    correctAnswer: "A",
  },
  {
    question: "What does the 'SSL handshake' primarily establish?",
    options: {
      A: "A data transfer agreement",
      B: "An encrypted communication channel",
      C: "The authentication of users",
      D: "The session key for encryption",
    },
    correctAnswer: "B",
  },
  {
    question:
      "Which type of encryption is used for the data encryption after the handshake in SSL/TLS?",
    options: {
      A: "Symmetric encryption",
      B: "Asymmetric encryption",
      C: "Hashing",
      D: "Triple DES",
    },
    correctAnswer: "A",
  },
  {
    question: "What is the difference between SSL and TLS?",
    options: {
      A: "SSL is faster than TLS",
      B: "TLS is an updated and more secure version of SSL",
      C: "TLS is an older protocol than SSL",
      D: "SSL supports more encryption methods than TLS",
    },
    correctAnswer: "B",
  },
  {
    question: "What are the main cryptographic goals of digital signatures?",
    options: {
      A: "Confidentiality, Data Integrity, Authentication, Non-repudiation",
      B: "Confidentiality, Authorization, Encryption, Decryption",
      C: "Confidentiality, Anonymity, Data Sharing, Repudiation",
      D: "Authentication, Privacy, Speed, Anonymity",
    },
    correctAnswer: "A",
  },
  {
    question: "Which key does the sender use to create a digital signature?",
    options: {
      A: "Receiver's public key",
      B: "Receiver's private key",
      C: "Sender's private key",
      D: "Sender's public key",
    },
    correctAnswer: "C",
  },
  {
    question: "What ensures the message integrity in a digital signature?",
    options: {
      A: "Encrypting the message with a private key",
      B: "Comparing the hash values of the original and received messages",
      C: "Using symmetric encryption",
      D: "Adding metadata to the message",
    },
    correctAnswer: "B",
  },
  {
    question:
      "What is the main difference between a MAC and a digital signature?",
    options: {
      A: "MAC is faster, but digital signatures are slower",
      B: "Only a holder of the private key can verify a MAC, but anyone can verify a digital signature",
      C: "Only a holder of the key can verify a MAC, but anyone can verify a digital signature",
      D: "MAC ensures confidentiality, while digital signatures ensure non-repudiation",
    },
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following is NOT an application of digital signatures?",
    options: {
      A: "Legal signing of contracts",
      B: "Secure software updates",
      C: "Secure e-commerce",
      D: "Password protection",
    },
    correctAnswer: "D",
  },
  {
    question:
      "In the ElGamal signature example, what is the purpose of the parameter r?",
    options: {
      A: "To encrypt the message",
      B: "To calculate the hash value",
      C: "To verify the signature",
      D: "To provide a unique value for each signature",
    },
    correctAnswer: "D",
  },
  {
    question: "What does a public-key certificate contain?",
    options: {
      A: "A private key and user ID",
      B: "A public key and the CA's private key",
      C: "A public key and user ID signed by a trusted third party",
      D: "A hash of the message",
    },
    correctAnswer: "C",
  },
  {
    question: "What is the standard format for public-key certificates?",
    options: {
      A: "SSL",
      B: "SHA-512",
      C: "X.509",
      D: "RSA",
    },
    correctAnswer: "C",
  },
  {
    question:
      "What is the primary weakness of broadcasting a public key without a certificate?",
    options: {
      A: "It cannot be used for encryption",
      B: "It can easily be forged, leading to impersonation",
      C: "It is too large for efficient communication",
      D: "It requires a hash value",
    },
    correctAnswer: "B",
  },
  {
    question:
      "What does a CA (Certificate Authority) do when issuing a certificate?",
    options: {
      A: "Verifies the user’s private key",
      B: "Encrypts the message with the user's public key",
      C: "Signs the user's public key and user ID with its private key",
      D: "Stores the user's private key securely",
    },
    correctAnswer: "C",
  },
  {
    question: "What is steganography?",
    options: {
      A: "Encrypting data for secure communication",
      B: "Hiding information within another file or medium",
      C: "Compressing data to save space",
      D: "Scrambling data to prevent access",
    },
    correctAnswer: "B",
  },
  {
    question: "What does the word 'steganography' mean in Greek?",
    options: {
      A: "Covered writing",
      B: "Encrypted writing",
      C: "Safe transmission",
      D: "Invisible image",
    },
    correctAnswer: "A",
  },
  {
    question: "Which of these is a common method for steganography in images?",
    options: {
      A: "Using metadata",
      B: "Modifying the Least Significant Bit (LSB)",
      C: "Applying a watermark",
      D: "Compressing the file",
    },
    correctAnswer: "B",
  },
  {
    question: "Which of the following is a common medium for steganography?",
    options: {
      A: "Text, image, audio, and video files",
      B: "System logs and error reports",
      C: "Firewall configurations",
      D: "Antivirus programs",
    },
    correctAnswer: "A",
  },
  {
    question:
      "What is the primary difference between steganography and encryption?",
    options: {
      A: "Steganography is easier to implement than encryption",
      B: "Encryption protects the content, while steganography hides its existence",
      C: "Encryption always uses a password; steganography does not",
      D: "Steganography is more secure than encryption",
    },
    correctAnswer: "B",
  },
  {
    question: "What is the term for detecting steganography in files?",
    options: {
      A: "Cryptanalysis",
      B: "Steganalysis",
      C: "Forensic analysis",
      D: "Pattern recognition",
    },
    correctAnswer: "B",
  },
  {
    question:
      "Which steganography tool is commonly used to hide messages in image files?",
    options: {
      A: "OpenStego",
      B: "Metasploit",
      C: "Nmap",
      D: "Hashcat",
    },
    correctAnswer: "A",
  },
  {
    question: "In audio steganography, what is the 'echo hiding' method?",
    options: {
      A: "Using sound echoes to conceal information",
      B: "Modifying sound pitch to encode data",
      C: "Adding silence intervals to encode bits",
      D: "Altering volume levels to hide data",
    },
    correctAnswer: "A",
  },
  {
    question: "In video steganography, where is data typically hidden?",
    options: {
      A: "The audio track only",
      B: "Frames or pixel changes in the video",
      C: "Metadata associated with the video",
      D: "File name and size",
    },
    correctAnswer: "B",
  },
  {
    question: "Which of the following is an ethical use of steganography?",
    options: {
      A: "Sending secret instructions for illegal activities",
      B: "Protecting sensitive data from surveillance",
      C: "Hiding malware in image files",
      D: "Concealing the presence of unauthorized data",
    },
    correctAnswer: "B",
  },
  {
    question: "What does IDS/IPS stand for?",
    options: {
      A: "Intrusion Detection System / Intrusion Prevention System",
      B: "Information Distribution System / Internet Protection System",
      C: "Integrated Data Security / Internal Protection Software",
      D: "Internet Device Sharing / Internal Privacy Shield",
    },
    correctAnswer: "A",
  },
  {
    question: "Which of the following is the primary purpose of IDS/IPS?",
    options: {
      A: "To detect and prevent unauthorized access to a network",
      B: "To optimize network speed and performance",
      C: "To manage user account permissions",
      D: "To store and back up data",
    },
    correctAnswer: "A",
  },
  {
    question:
      "Which of the following is true about the different types of Network-Based IDS (NIDS)?",
    options: {
      A: "Signature-Based NIDS is most effective at detecting zero-day attacks.",
      B: "Anomaly-Based NIDS relies on a database of known attack signatures.",
      C: "Hybrid NIDS combines both signature-based and anomaly-based methods for improved accuracy.",
      D: "Inline NIDS cannot take action to block malicious traffic.",
    },
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following is true about the different types of Host-Based IDS (HIDS)?",
    options: {
      A: "File Integrity Checkers (FIC) detect abnormal system call patterns.",
      B: "Log File Monitors identify suspicious activities through system calls.",
      C: "Registry Monitors monitor changes to the Windows Registry for unauthorized access.",
      D: "System Call-Based HIDS focuses on detecting unauthorized modifications to system files.",
    },
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following is true about different types of Detection Methods in IDS?",
    options: {
      A: "Signature-Based IDS identifies threats based on behavior patterns and anomalies.",
      B: "Behavior-Based IDS uses machine learning algorithms to detect threats.",
      C: "Anomaly-Based IDS relies on a baseline of normal behavior and flags deviations.",
      D: "Heuristic-Based IDS uses general rules or heuristics to identify potential threats.",
    },
    correctAnswer: "D",
  },
  {
    question: "Which of the following is a disadvantage of using IDS?",
    options: {
      A: "Early threat detection and real-time alerts",
      B: "False positives, where legitimate activities are mistaken for threats",
      C: "Provides detailed visibility into network activities",
      D: "Helps with compliance requirements by detecting security threats",
    },
    correctAnswer: "B",
  },
  {
    question:
      "How does an Intrusion Prevention System (IPS) typically operate?",
    options: {
      A: "IPS only monitors network traffic but does not actively block malicious activities.",
      B: "IPS uses a combination of signature-based detection, anomaly-based detection, and deep packet inspection to identify and prevent threats.",
      C: "IPS performs manual responses to threats identified by the system administrator.",
      D: "IPS does not integrate with IDS and operates independently to detect threats.",
    },
    correctAnswer: "B",
  },
  {
    question:
      "Which of the following is true about different types of Intrusion Prevention Systems (IPS)?",
    options: {
      A: "Passive IPS actively blocks malicious traffic in real-time.",
      B: "Hardware IPS is designed specifically for cloud environments.",
      C: "Integrated IPS combines IPS functionality with other security appliances, like firewalls.",
      D: "Behavioral IPS relies solely on signature-based detection.",
    },
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following is a key advantage of an Intrusion Prevention System (IPS)?",
    options: {
      A: "IPS requires manual intervention to block threats.",
      B: "IPS operates passively without blocking malicious traffic.",
      C: "IPS conducts deep packet inspection to identify and block specific malicious content.",
      D: "IPS cannot be customized to meet specific organizational security needs.",
    },
    correctAnswer: "C",
  },
  {
    question: "What is a key difference IDS and IPS?",
    options: {
      A: "IDS actively blocks malicious traffic, while IPS only detects and reports it.",
      B: "IDS detects and alerts on potential threats, while IPS can automatically block or mitigate threats in real-time.",
      C: "IPS is used only for monitoring network logs, while IDS inspects packet content.",
      D: "IPS uses signature-based detection, while IDS relies only on anomaly-based detection.",
    },
    correctAnswer: "B",
  },
];
