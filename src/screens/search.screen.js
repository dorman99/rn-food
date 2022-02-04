import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import useBusinesses from "../hooks/useBusinesses";
import SearchBar from "../components/search_bar";
import ResultList from "../components/resultList";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useBusinesses(); // create own hooks

  const filterResultsByPrice = (price) => {
    return results.filter((r) => r.price === price);
  };
// adding flex: 1 to parent element to tell them, just expand to available screen not out of it
  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitted={() => searchAPI(term || "pizza")}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList title="Cost Effective" results={filterResultsByPrice("$")} />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
        <ResultList title="Bigger Amount" results={filterResultsByPrice("$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  }
});

export default SearchScreen;
