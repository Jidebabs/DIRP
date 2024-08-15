import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const DocumentDownload = () => {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    textWrap:{
      display:"flex",
      marginBottom:"12px",
      flexDirection: 'row',
    },
    title:{
      fontWeight:600,
      fontSize:"14px",
      color:"#28282B",
      minWidth:"160px"
    },
    description:{
      color:"#28282B",
      fontSize:"14px",
      maxWidth:"350px"
    },
    header:{
      fontWeight:600,
      fontSize:"24px",
      color:"#28282B",
      marginBottom:"40px"
    }
  });

  const reportData = (title:string, detail:string) => (
    <View style={styles.textWrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{detail}</Text>
    </View>
  )

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
        <Text style={styles.header}>Data Leak on NAF Tentative Website</Text>

        {reportData("Title:", "Data Leak on NAF Tentative Website")}
        {reportData("Report number:", `DIRP/003`)}
        {reportData("Date reported:", "08-10-2023")}
        {reportData("Service:", "Nigerian Army")}
        {reportData("Vulnerability type:", "Malware")}
        {reportData("Severity level:", "Medium")}
        {reportData("Status:", "Acknowledged")}

        {reportData("Description:", "Lorem ipsum dolor sit amet consectetur. Sed malesuada sollicitudin posuere non pretium aliquet eu ultrices. Semper ac sagittis ac porta. Nec id at eros est dignissim.")}

        {reportData("Recommendations:", "Lorem ipsum dolor sit amet consectetur. Sed malesuada sollicitudin posuere non pretium aliquet eu ultrices. Semper ac sagittis ac porta. Nec id at eros est dignissim. Quis quis enim odio orci. ")}

        {reportData("Additional Information:", "Lorem ipsum dolor sit amet consectetur. Sed malesuada sollicitudin posuere non pretium aliquet eu ultrices. Semper ac sagittis ac porta. Nec id at eros est dignissim. Quis quis enim odio orci.")}
        </View>
      </Page>
    </Document>
  )
}
export default DocumentDownload