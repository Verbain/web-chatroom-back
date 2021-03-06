const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const config = require('./config');

const db = initializeApp({
  credential: cert({
    "type": config.type,
    "project_id": config.project_id,
    "private_key_id": config.private_key_id,
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCpXiP+HHnXwXbA\n9YGTwrxRbzIXBJLLJ1yQ94Rhrvds4MduBguhIhD1WRg73hHVRmThUKScLzOKDZCF\nBpTLdeiqSPF6Qx4zSismk3wY/ubCF8efcAEjfYgFRlQwweNbMKJKaDwOSr4hA5qW\nH8tQuYxuzU4fH1cHEJyReLCMUb/zrLLOgBImm8AO0RMAS9SsThuH0yDl+/VAbRXs\nqrlDe2X6FpVxFeaeYpWIfkRCKHhMW10U7vKJY1HKEWNActQVp00+5iaTJsHTqFnQ\ndAz63bfCoF9UuG2pZqwGWofuQVhq42PHy2YoDdL2Z1IWOOQMr0l3FAM6SxgurHQL\nT8C6CVXvAgMBAAECggEAAcWF+7qZmbhTiihkyxK/82xEQhgYvgKyFWhc4ILaI8A1\nB9/ErFjiIZrBWz2FFL8F/BYUCa+6jgAR9rEFD1FnnyKfAvpn4KTMc2qQzFSy9UXb\nlW7EDiEbySalggc1KZPe74dwW6JSt0NHSPPlDp3mwU0g0hcVI6APpuMeusQXoStz\nfrpcXrjuddCYueE5WJhQdz7+bxu7E4TBXjfZpwmMfIYFksPQ4Pc/tkrqQcK0oblN\n1b97fVPk/7tBp45KYDx8p18cMaCmIlG6282rOHWNba/lh2/5Ph5JHZZm6nYQkMKl\nbd6+apI00jyzsN/b+NiK+MMnVIdm8LXzFSIbTUSUMQKBgQDkGWK4/htE0UEzlXLQ\n5T5RddS/YRM2MK+j4F720OYxqyMxu95BX5yDzlnrMumOkGxQVfK+sQ6ku+xHd7v0\nRqryD1InzBNc2QAiBfrblM1eGtvf8nrHcs1RIHUwksec7GoZZMhx+RiUST018OPA\n6Rh6D78tM82nRqsh1XjuPu48CQKBgQC+FakQyNXzaVk5geLBPP7T4H+xSuC162gV\nk/6XYYBr57+FduYF8+TP1lPns64XQh6c88VmTVLvjYmLiGNEhJ3SBbdWeNEWVB0u\nzS2Eyp1JGJkskLlSKfGwA4oqzk/NEqlE/CKb0/M4tUVjenuXmb/hYyXhuHug4CCd\nRSp0YILwNwKBgAXjkeTsyo9wR5qpVRmHkaBQxnlabECN6Tr14/3DTu4hWPtDum09\nprDQdwnXeqgvmlxIm8fIknQ2VddShAu+d1NgieJ1JlrTT2mRdfSNVvADCYIypHDZ\nyes6R0xFvdmTUPnu3C31HGlXqrjlyzuDyRn9phXorHqRHIH3HPQps8ThAoGAEEP6\nO51z8WhKYkljBfYaODc1tg4aPHbwaShI2NtXCeTC1sDd3hSIt+A3PdR6STM3O2cA\ntUhYmHccFfyNwgc3GgmzLosYGTkJZj/YbUyJOQAJ225m7Uj5jX5ADHmrCnlWUrjg\nnUT9wxR/44tPmCFn8flx/Ga07YdAQzTv9RVtHvECgYB14/xMEazPTdr2hBvFU4PD\nbPC1hD/y4+hIuZsp8Qx2gj5+Z74jY4WIBoZZaHeakOPL09MJ9YA7b6cXfbJYXTuA\ncFR2XHGx3n3cPxaHexrkr4WuIpLKFf23mjxDTMn/Hps6x5fU/xC1CtGkeyNEohcw\nHreSvP0yyzwH+yJTAQY85Q==\n-----END PRIVATE KEY-----\n",
    "client_email": config.client_email,
    "client_id": config.client_id,
    "auth_uri": config.auth_uri,
    "token_uri": config.token_uri,
    "auth_provider_x509_cert_url": config.auth_provider,
    "client_x509_cert_url": config.client_cert_url
  })
});

//const db = initializeApp(config.firebaseConfig);

module.exports = getFirestore();