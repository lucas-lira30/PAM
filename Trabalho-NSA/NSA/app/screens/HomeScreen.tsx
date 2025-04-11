import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface ClassInfo {
  className: string;
  classTime: string;
}

const HomeScreen: React.FC = () => {
  const upcomingClasses: ClassInfo[] = [
    { className: 'Programação Mobile', classTime: '13:00 - 14:40' },
    { className: 'Banco de Dados', classTime: '14:40 - 16:20' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Olá, João Silva</Text>
        <Text style={styles.courseText}>Desenvolvimento de Sistemas - 2º Módulo</Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Faltas do Mês</Text>
          <Text style={styles.cardValue}>3/20</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Média Geral</Text>
          <Text style={styles.cardValue}>8.5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximas Aulas</Text>
        {upcomingClasses.map((classInfo, index) => (
          <View key={index} style={styles.classCard}>
            <Text style={styles.className}>{classInfo.className}</Text>
            <Text style={styles.classTime}>{classInfo.classTime}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Avisos</Text>
        <View style={styles.noticeCard}>
          <Text style={styles.noticeTitle}>Entrega de Trabalho</Text>
          <Text style={styles.noticeText}>Projeto Mobile deve ser entregue até 25/02</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  courseText: {
    fontSize: 16,
    color: '#666',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    color: '#666',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  className: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classTime: {
    fontSize: 14,
    color: '#666',
  },
  noticeCard: {
    backgroundColor: '#ffebcc',
    padding: 15,
    borderRadius: 10,
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noticeText: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
