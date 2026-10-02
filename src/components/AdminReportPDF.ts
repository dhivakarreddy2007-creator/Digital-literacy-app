import { jsPDF } from 'jspdf';
import { SurveyResponse } from '../types';

export const downloadAdminReportPDF = (surveys: SurveyResponse[]) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Top header banner
  doc.setFillColor(6, 95, 70); // Theme Emerald
  doc.rect(0, 0, width, 32, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('B.TECH COMMUNITY SERVICE PROJECT (CSP)', width / 2, 12, { align: 'center' });

  doc.setFontSize(18);
  doc.text('VILLAGE DIGITAL LITERACY SURVEY REPORT', width / 2, 22, { align: 'center' });

  // Subheader
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(200, 240, 220);
  doc.text(`Official CSP Field Documentation | Generated: ${new Date().toLocaleDateString()}`, width / 2, 28, { align: 'center' });

  // Summary Metrics Section
  let y = 42;
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text('1. EXECUTIVE SUMMARY & KEY INDICATORS', 14, y);

  y += 6;
  const total = surveys.length || 1;
  let smartphoneCount = 0;
  let internetCount = 0;
  let awarenessCount = 0;
  const villageCounts: Record<string, number> = {};

  surveys.forEach(s => {
    if (s.isSmartphoneUser) smartphoneCount++;
    if (s.isInternetUser) internetCount++;
    if (s.hasDigitalAwareness) awarenessCount++;
    const v = s.villageName || 'Other';
    villageCounts[v] = (villageCounts[v] || 0) + 1;
  });

  const smartPct = Math.round((smartphoneCount / total) * 100);
  const netPct = Math.round((internetCount / total) * 100);
  const awarePct = Math.round((awarenessCount / total) * 100);

  // 4 metric cards
  const cardWidth = 42;
  const cardHeight = 18;
  const metrics = [
    { label: 'Total Surveys', value: String(surveys.length), color: [16, 185, 129] },
    { label: 'Smartphone User', value: `${smartPct}%`, color: [59, 130, 246] },
    { label: 'Internet Active', value: `${netPct}%`, color: [139, 92, 246] },
    { label: 'Prior Awareness', value: `${awarePct}%`, color: [245, 158, 11] }
  ];

  metrics.forEach((m, idx) => {
    const x = 14 + idx * (cardWidth + 4);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(x, y, cardWidth, cardHeight, 2, 2, 'FD');

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(m.label, x + 4, y + 6);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(m.color[0], m.color[1], m.color[2]);
    doc.text(m.value, x + 4, y + 14);
  });

  y += cardHeight + 10;

  // Village Demographics
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text('2. VILLAGE PARTICIPATION BREAKDOWN', 14, y);

  y += 6;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);

  const villageEntries = Object.entries(villageCounts).sort((a, b) => b[1] - a[1]);
  const villageSummary = villageEntries.map(([v, count]) => `${v}: ${count} (${Math.round((count / total) * 100)}%)`).join('  |  ');
  doc.text(villageSummary.substring(0, 100), 14, y);
  if (villageSummary.length > 100) {
    y += 5;
    doc.text(villageSummary.substring(100, 200), 14, y);
  }

  y += 10;

  // Participants Table Header
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text('3. COMMUNITY RESPONDENT ROSTER', 14, y);

  y += 6;
  doc.setFillColor(6, 95, 70);
  doc.rect(14, y, width - 28, 8, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text('#', 17, y + 5.5);
  doc.text('Full Name', 25, y + 5.5);
  doc.text('Village', 75, y + 5.5);
  doc.text('Age / Gender', 115, y + 5.5);
  doc.text('Phone', 145, y + 5.5);
  doc.text('Smartphone', 175, y + 5.5);

  y += 8;

  // Table rows
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);

  const displayedSurveys = surveys.slice(0, 22);
  displayedSurveys.forEach((s, idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(14, y, width - 28, 6.5, 'F');
    }

    doc.setTextColor(51, 65, 85);
    doc.text(String(idx + 1), 17, y + 4.5);
    doc.text(s.fullName.substring(0, 22), 25, y + 4.5);
    doc.text(s.villageName.substring(0, 18), 75, y + 4.5);
    doc.text(`${s.age} / ${s.gender}`, 115, y + 4.5);
    doc.text(s.phoneNumber || 'N/A', 145, y + 4.5);
    doc.text(s.isSmartphoneUser ? 'Yes' : 'No', 178, y + 4.5);

    y += 6.5;
  });

  if (surveys.length > 22) {
    y += 3;
    doc.setFont('Helvetica', 'oblique');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`... and ${surveys.length - 22} more survey responses recorded in cloud database.`, 14, y);
  }

  // Footer seal and verification
  const footerY = height - 16;
  doc.setDrawColor(226, 232, 240);
  doc.line(14, footerY, width - 14, footerY);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Smart Digital Literacy Platform • Academic Community Service Project Documentation • Certified Record', width / 2, footerY + 6, { align: 'center' });

  doc.save(`CSP_Digital_Literacy_Survey_Report_${new Date().toISOString().split('T')[0]}.pdf`);
};
