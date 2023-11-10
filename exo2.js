import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Exo2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  useEffect(() => {
    setPasswordError(password.length > 0 && password.length < 3);
  }, [password]);

  const passwordInputStyle = useMemo(
    () => ({
      ...styles.input,
      borderColor: passwordError ? "red" : "gray",
    }),
    [passwordError]
  );

  const confirmPasswordInputStyle = useMemo(
    () => ({
      ...styles.input,
      borderColor: confirmPasswordError ? "red" : "gray",
    }),
    [confirmPasswordError]
  );

  const handleConfirmPasswordChange = useCallback(
    (text) => {
      setConfirmPassword(text);
      setConfirmPasswordError(text !== password);
    },
    [password]
  );

  const handleSubmit = useCallback(() => {
    if (password !== confirmPassword || password.length < 3) {
      Alert.alert("Erreur", "Veuillez vérifier vos informations.");
    } else {
      const message = `Bonjour ${firstName} ${lastName}, votre mot de passe est ${password}`;
      Alert.alert("Inscription envoyée", message);
    }
  }, [firstName, lastName, password, confirmPassword]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Text style={styles.registrationHeader}>Inscription</Text>
      <View style={styles.profileImage}>
        <Image source={require('./assets/profil-pic.png')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={passwordInputStyle}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onEndEditing={() => setPasswordError(password.length > 0 && password.length < 3)}
        />
        <TextInput
          style={confirmPasswordInputStyle}
          placeholder="Confirmation du mot de passe"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          onEndEditing={() => setConfirmPasswordError(confirmPassword !== password)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  registrationHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 60,
    marginBottom: 40,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 30,
    paddingLeft: 10,
    backgroundColor: "lightgray",
  },
  
  buttonContainer: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    color: "gray",
  },
});
