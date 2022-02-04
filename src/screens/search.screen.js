import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitted={() => searchAPI(term || "pizza")}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
        <ResultList title="Bigger Amount" results={filterResultsByPrice("$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
