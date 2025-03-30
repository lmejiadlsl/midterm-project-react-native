import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Ionicons from "react-native-vector-icons/Ionicons"; 

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery}) => {
    const { theme } = useTheme();
    
    return (
        <View style={[styles.searchContainer, { backgroundColor: theme.colors.inputBackground }]}>
            <Ionicons 
                name="search" 
                size={20} 
                color={theme.colors.textSecondary} 
                style={styles.searchIcon} 
            />
            <TextInput
                style={[styles.searchInput, { color: theme.colors.text }]}
                placeholder="Search for jobs..."
                placeholderTextColor={theme.colors.textSecondary}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 10,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
});

export default SearchBar;