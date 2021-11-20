import React from "react";
import { SafeAreaView, KeyboardAvoidingView, StatusBar, Platform } from "react-native";
import estilosGlobal, { cores } from '../../estilos';
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
    return (
        <>
            <SafeAreaView style={estilos.ajusteCima} />
            <SafeAreaView style={estilosGlobal}>
                <StatusBar backgroundColor={cores.roxo} />
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={estilosGlobal}>
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={estilos.ajusteBaixo} />
        </>
    );
};