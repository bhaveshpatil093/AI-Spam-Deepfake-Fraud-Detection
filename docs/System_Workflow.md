# System Workflow: AI-Powered Fraud Detection System

This document outlines the detailed workflow of the AI-Powered Fraud Detection System, including its components and their interactions. The workflow is divided into multiple stages for clarity and modularity.

---

## **1. Data Ingestion**
- **Sources**:
  - Call recordings, VKYC videos, and transaction logs are stored in **Amazon S3** buckets.
- **ETL Process**:
  - **AWS Glue** is used to clean and transform transaction data for analysis.

---

## **2. Spam Call Detection**
- **Audio Transcription**:
  - **AWS Transcribe** converts call recordings into text.
- **Transcript Analysis**:
  - **AWS Comprehend** analyzes transcripts for phishing keywords using NLP techniques.
- **Call Metadata Analysis**:
  - A custom Python-based solution analyzes metadata such as call frequency and duration to flag suspicious calls.

---

## **3. Deepfake Detection in VKYC**
- **Facial Recognition**:
  - **Amazon Rekognition** detects and analyzes faces in VKYC video sessions.
- **Deepfake Detection**:
  - **Amazon SageMaker** runs ML models to identify anomalies in facial features and voice patterns.
- **Results**:
  - VKYC sessions are flagged as genuine or suspicious.

---

## **4. Financial Fraud Detection**
- **Data Preparation**:
  - **AWS Glue** prepares transaction data for machine learning analysis.
- **Anomaly Detection**:
  - **Isolation Forest** or custom-trained SageMaker models detect irregularities in transaction patterns.
- **Results**:
  - Transactions are classified as normal or potentially fraudulent.

---

## **5. Real-Time Alerts and Feedback**
- **Notifications**:
  - **Amazon SNS** sends real-time alerts to users when suspicious activities are detected.
- **User Interface**:
  - A **Flask-based UI**, hosted using **AWS Amplify**, allows users to:
    - Report fraudulent activities.
    - View real-time alerts and transaction status.

---

## **System Workflow Diagram**
![System Architecture](docs/System_Architecture_Diagram.png)

---

## **Summary of AWS Services**
| Service         | Purpose                                                        |
|------------------|----------------------------------------------------------------|
| **Amazon S3**    | Storage for call recordings, VKYC videos, and transaction logs |
| **AWS Glue**     | ETL processing for transaction data                            |
| **AWS Lambda**   | Serverless workflows for fraud detection                       |
| **AWS Rekognition** | Facial and video analysis for VKYC sessions                 |
| **Amazon SageMaker** | Training and inference for anomaly detection models        |
| **Amazon SNS**   | Real-time notifications and alerts                             |
| **AWS Amplify**  | Hosting the UI for reporting and feedback                      |
| **AWS Transcribe** | Converts audio recordings to text for analysis               |
| **AWS Comprehend** | NLP for analyzing call transcripts                           |

---

## **Future Improvements**
1. **Enhanced Deepfake Detection**:
   - Integrate advanced models for voice and facial analysis.
2. **Domain Expansion**:
   - Extend fraud detection to other industries like healthcare and e-commerce.
3. **Improved User Feedback**:
   - Utilize user feedback to iteratively improve model accuracy.

---

## **Contributors**
- **Name**: Bhavesh Patil
- **Role**: Project Leader
- **Contact**: bhaveshpatiltech@gmail.com

---

## **How to Use**
1. Place this `System_Workflow.md` in the root of your GitHub repository.
2. Ensure all referenced files (like diagrams) are in the `docs/` directory.
3. Use this file as a comprehensive reference for understanding the project workflow.
