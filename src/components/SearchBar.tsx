import React from "react";
import { TextInput, View } from "react-native";
import globalStyles from "../styles/globalstyles";
import Ionicons from "react-native-vector-icons/Ionicons"; 

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery}) => {
    return (
        <View style={globalStyles.searchContainer}>
            <Ionicons name="search" size={20} color="gray" style={globalStyles.searchIcon} />
            <TextInput
            style={globalStyles.searchInput}
            placeholder="Search for jobs..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
            />
            </View>
    );
};

export default SearchBar;
