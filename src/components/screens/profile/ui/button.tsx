import { Pressable, StyleSheet, Text } from "react-native";


interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
}

export default function Button({ onPress, children }: ButtonProps) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#F9B401",
    },
});