import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 19,
    paddingBottom: 110,
  },


  pageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 20,
    padding: 30,
  },

  // ==========================================
  // CARD
  // ==========================================

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    padding: 20,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.16,
    shadowRadius: 3,
    elevation: 4,
  },

  // ==========================================
  // TÍTULO DA OS
  // ==========================================

  osTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 7,
  },

  // ==========================================
  // DATA
  // ==========================================

  date: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 15,
  },

  // ==========================================
  // LINHAS DE INFORMAÇÃO
  // ==========================================

  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  iconBox: {
    width: 23,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 1,
  },

  infoContent: {
    flex: 1,
  },

  // ==========================================
  // LABEL
  // ==========================================

  label: {
    fontSize: 12,
    lineHeight: 15,
    color: '#858585',
    marginBottom: 1,
  },

  // ==========================================
  // VALOR
  // ==========================================

  value: {
    fontSize: 13,
    lineHeight: 15,
    color: '#151515',
    fontWeight: '500',
  },

  // ==========================================
  // DIVISÓRIA
  // ==========================================

  divider: {
    height: 1,
    backgroundColor: '#D0D0D0',
    marginTop: 11,
    marginBottom: 20,
  },

  // ==========================================
  // TÍTULOS DAS SEÇÕES
  // ==========================================

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#151515',
    marginBottom: 8,
  },

  // ==========================================
  // DESCRIÇÃO
  // ==========================================

  description: {
    fontSize: 11.5,
    lineHeight: 15,
    color: '#333333',
    marginBottom: 20,
  },

  // ==========================================
  // FOTO
  // ==========================================

  problemImage: {
    width: '100%',
    height: 94,
    borderRadius: 6,
    backgroundColor: '#F1F1F1',
  },

  // ==========================================
  // BOTÃO EDITAR
  // ==========================================

  editButton: {
    height: 36,
    width: '100%',
    borderWidth: 1,
    borderColor: '#3778FF',
    borderRadius: 6,
    backgroundColor: '#F4F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  editButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#276CFF',
  },

});