import { StyleSheet } from "react-native";

export const globalColors = {
    background: '#ffff',
    primarybg: '#4A7E8F',
    another:'#000000',
    bluecolor:'#082464'
}

export const globalStyles = StyleSheet.create({
    buttonText: {
        color: globalColors.background,
        fontSize: 20,
        fontWeight: '500',
    },
    buttonsBanner: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', // Asegura que estén alineados verticalmente
        gap: 50,
        flexWrap: 'nowrap', // Impide que los botones se muevan a una nueva línea
    },
    
    CapTitle :{
        width: '100%',
        backgroundColor: globalColors.bluecolor,
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    QuestTitle :{
        width: '100%',
        
        padding: 10,

        textAlign: 'center',
        marginBottom: 10,
    },
    HomeScreenContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 150,
        padding: 20,
        backgroundColor: globalColors.background,
    },
    fab:{
        color: 'black',
        backgroundColor: globalColors.bluecolor,
        width:55,
        margin:16,
        right:0,
        bottom:0
    },
    FomsContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: globalColors.background,
    },
    PrimaryButton: {
        backgroundColor: globalColors.bluecolor,
        borderRadius: 5,
        padding: 10,
        width: '70%',
        paddingTop: 25,
        height: 80,
        alignContent: 'center',
        alignItems: 'center',
    },
    questionTitle:{
        color: 'black',
        marginBottom: 10,
    },
    Title: {
        fontSize: 20,
        fontWeight: '500',
        color: globalColors.background,
        textAlign: 'center',
    },
    Title2: {
        fontSize: 18,
        fontWeight: '500',
        color: globalColors.another,
        textAlign: 'left',
        padding:15
    },
    input:{
        height: 50,
        marginBottom: 20,
        paddingLeft: 20,
        backgroundColor: globalColors.bluecolor,
        color: 'white',
        borderRadius: 10,
        fontSize: 15,
        fontWeight: '700',
    },
    picker:{
        borderRadius: 10,
        // backgroundColor: 'rgba(75, 251, 247, 0.37)',
        marginBottom: 10,
        padding: 10, 
        borderWidth: 3, 
        borderColor: globalColors.bluecolor,
    },
    checkboxContainer: {
        flexDirection: 'row',         // Para que el CheckBox y el texto estén en fila
        alignItems: 'center',         // Centra el checkbox verticalmente con el texto
        marginVertical: 10,           // Espaciado vertical entre checkboxes
        flex: 1,               
      },
      
      checkboxText: {
        flex: 1,                      // Permite que el texto ocupe el espacio disponible
        marginLeft: 10,              // Espaciado entre el CheckBox y el texto
        flexWrap: 'wrap',            // Permite que el texto se ajuste en varias líneas si es necesario
      }      
}
)