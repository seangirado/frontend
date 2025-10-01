import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'khaki', 
        alignItems: 'center',    
        justifyContent: 'center', 
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },

    headerText: { 
        fontSize: 28,
        fontWeight: '700', 
        color: 'black', 
        textAlign: 'center',
        marginBottom: 40,
        fontSize: 90, 
    },


    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginVertical: 8,
        width: '30%',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },


    buttonWrapper: {
        marginTop: 20, 
        width: '30%',  
    },

    reviewContainer: {
        flex: 1,
        backgroundColor: 'khaki', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
    
   
});

export default styles;