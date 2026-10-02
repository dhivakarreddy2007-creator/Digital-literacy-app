import { jsPDF } from 'jspdf';

interface CertificateData {
  userName: string;
  villageName: string;
  score: number;
  date: string;
  sha: string;
}

export const downloadCertificatePDF = (data: CertificateData) => {
  // Create PDF in landscape mode (A4 format)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const width = doc.internal.pageSize.getWidth(); // ~297mm
  const height = doc.internal.pageSize.getHeight(); // ~210mm

  // 1. Draw outer deep emerald border
  doc.setDrawColor(6, 95, 70); // Theme green (emerald-800)
  doc.setLineWidth(1.8);
  doc.rect(8, 8, width - 16, height - 16);

  // 2. Draw inner elegant thin gold border
  doc.setDrawColor(217, 119, 6); // Golden Amber
  doc.setLineWidth(0.6);
  doc.rect(11, 11, width - 22, height - 22);

  // 3. Draw dual accent corner triangles
  doc.setFillColor(6, 95, 70);
  // Top-Left corner flourish
  doc.triangle(11, 11, 23, 11, 11, 23, 'F');
  // Top-Right corner flourish
  doc.triangle(width - 11, 11, width - 23, 11, width - 11, 23, 'F');
  // Bottom-Left corner flourish
  doc.triangle(11, height - 11, 23, height - 11, 11, height - 23, 'F');
  // Bottom-Right corner flourish
  doc.triangle(width - 11, height - 11, width - 23, height - 11, width - 11, height - 23, 'F');

  // 4. Header Section
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(180, 140, 10);
  doc.text('GOVERNMENT RECOGNIZED B.TECH COMMUNITY SERVICE PROJECT', width / 2, 23, { align: 'center' });

  doc.setFontSize(26);
  doc.setTextColor(6, 95, 70);
  doc.text('CERTIFICATE OF DIGITAL LITERACY', width / 2, 35, { align: 'center' });

  // Divider lines
  doc.setDrawColor(217, 119, 6);
  doc.setLineWidth(0.8);
  doc.line(width / 2 - 60, 40, width / 2 + 60, 40);

  // Subheader
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139); // Slate grayish
  doc.text('AWARDED BY THE CSP ACADEMIC PROJECT COMMITTEE', width / 2, 46, { align: 'center' });

  // 5. Body Text
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(30, 41, 59); // Dark graphite
  doc.text('This is to certify that the rural community resident:', width / 2, 64, { align: 'center' });

  // User Name (Large and bold)
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(6, 95, 70);
  doc.text(data.userName.toUpperCase(), width / 2, 78, { align: 'center' });

  // Village Details
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(30, 41, 59);
  doc.text(`of `, width / 2, 88, { align: 'center' });
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(15);
  doc.text(`${data.villageName} Village`, width / 2, 96, { align: 'center' });

  // Core explanation
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  doc.text('has successfully completed the comprehensive rural awareness curriculum including', width / 2, 108, { align: 'center' });
  doc.text('Smartphone Operations, Online Payments, Cyber Security safeguards, and DigiLocker E-Services.', width / 2, 114, { align: 'center' });

  // Performance scoring and certificate registration
  doc.setFont('Helvetica', 'oblique');
  doc.setFontSize(11);
  doc.setTextColor(15, 118, 110);
  doc.text(`Completed on ${data.date} with an outstanding Quiz score of ${data.score}%`, width / 2, 126, { align: 'center' });

  // 6. Draw Official B.Tech CSP Gold Seal on the left of bottom row
  const sealX = 60;
  const sealY = 160;
  
  // Outer circle of gold seal
  doc.setFillColor(217, 119, 6);
  doc.circle(sealX, sealY, 15, 'F');
  // Inner circle
  doc.setFillColor(6, 95, 70);
  doc.circle(sealX, sealY, 13, 'F');
  // Central star/seal graphics
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7);
  doc.text('★ SEED ★', sealX, sealY - 1, { align: 'center' });
  doc.setFontSize(6);
  doc.text('CSP PROJECT', sealX, sealY + 3, { align: 'center' });

  // 7. Signatures Panel
  // Sign 1: Project Coordinator
  const coordX = 140;
  const signY = 164;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(coordX - 18, signY - 6, coordX + 18, signY - 6);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Project Coordinator', coordX, signY, { align: 'center' });
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(6, 95, 70);
  doc.text('Dr. J. Ramachandran', coordX, signY - 8, { align: 'center' });

  // Sign 2: Academic Program Dean
  const deanX = 220;
  doc.line(deanX - 18, signY - 6, deanX + 18, signY - 6);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Dean of Evaluation', deanX, signY, { align: 'center' });
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(6, 95, 70);
  doc.text('Prof. K. Srinivasa Rao', deanX, signY - 8, { align: 'center' });

  // 8. Bottom verification watermark
  doc.setFont('Courier', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184); // light gray
  doc.text(`VERIFICATION ID: ${data.sha} | QR PORTAL VERIFIED`, width / 2, 192, { align: 'center' });

  // Save/Download Action
  const filename = `Digital_Literacy_Certificate_${data.userName.replace(/\s+/g, '_')}.pdf`;
  doc.save(filename);
};
