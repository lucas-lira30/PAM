import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface GradeItem {
  subject: string;
  grade: number;
}

const GradesScreen: React.FC = () => {
  const grades: GradeItem[] = [
    { subject: 'Matemática', grade: 8.5 },
    { subject: 'Física', grade: 7.2 },
    { subject: 'Banco de Dados', grade: 9.0 },
    { subject: 'Programação Mobile', grade: 8.8 },
    { subject: 'Português', grade: 7.5 },
    { subject: 'História', grade: 8.0 },
    { subject: 'Inteligência Artificial', grade: 9.5 },
    { subject: 'Ética Profissional', grade: 8.3 },
    { subject: 'Projeto Integrador', grade: 9.2 },
    { subject: 'Educação Física', grade: 10.0 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notas das Disciplinas</Text>

      {grades.map((item, index) => (
        <View key={index} style={styles.gradeCard}>
          <Text style={styles.subjectName}>{item.subject}</Text>
          <Text style={[styles.gradeValue, getGradeColor(item.grade)]}>
            {item.grade.toFixed(1)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

// Função para definir cor do texto com base na nota
const getGradeColor = (grade: number) => {
  if (grade >= 9) return { color: '#2ecc71' }; // Verde para notas altas
  if (grade >= 7) return { color: '#f39c12' }; // Laranja para notas médias
  return { color: '#e74c3c' }; // Vermelho para notas baixas
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gradeCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gradeValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradesScreen;
