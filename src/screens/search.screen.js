import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import useBusinesses from "../hooks/useBusinesses";
import SearchBar from "../components/search_bar";
import ResultList from "../components/resultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useBusinesses(); // create own hooks

  const filterResultsByPrice = (price) => {
    return results.filter((r) => r.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitted={() => searchAPI(term || "pizza")}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {results.length} results</Text>
      <ResultList title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
