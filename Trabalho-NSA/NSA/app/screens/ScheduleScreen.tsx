import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface ScheduleItem {
  day: string;
  classes: { subject: string; time: string }[];
}

const ScheduleScreen: React.FC = () => {
  const schedule: ScheduleItem[] = [
    {
      day: 'Segunda-feira',
      classes: [
        { subject: 'Matemática', time: '13:00 - 14:40' },
        { subject: 'Física', time: '14:40 - 16:20' },
      ],
    },
    {
      day: 'Terça-feira',
      classes: [
        { subject: 'Banco de Dados', time: '13:00 - 14:40' },
        { subject: 'Programação Mobile', time: '14:40 - 16:20' },
      ],
    },
    {
      day: 'Quarta-feira',
      classes: [
        { subject: 'Português', time: '13:00 - 14:40' },
        { subject: 'História', time: '14:40 - 16:20' },
      ],
    },
    {
      day: 'Quinta-feira',
      classes: [
        { subject: 'Inteligência Artificial', time: '13:00 - 14:40' },
        { subject: 'Ética Profissional', time: '14:40 - 16:20' },
      ],
    },
    {
      day: 'Sexta-feira',
      classes: [
        { subject: 'Projeto Integrador', time: '13:00 - 14:40' },
        { subject: 'Educação Física', time: '14:40 - 16:20' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Horário das Aulas</Text>
      
      {schedule.map((daySchedule, index) => (
        <View key={index} style={styles.daySection}>
          <Text style={styles.dayTitle}>{daySchedule.day}</Text>
          {daySchedule.classes.map((classItem, idx) => (
            <View key={idx} style={styles.classCard}>
              <Text style={styles.className}>{classItem.subject}</Text>
              <Text style={styles.classTime}>{classItem.time}</Text>
            </View>
          ))}
        </View>
      ))}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  daySection: {
    marginBottom: 15,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
});

export default ScheduleScreen;
