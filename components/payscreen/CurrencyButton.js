function CurrencyButton({ onPress, title}) {
  return (
    <View style={[styles.rowFlex, { justifyContent: "center", marginTop: 20 }]}>
      <Button style={[styles.currencyButton]} onPress={onPress}>
        {title}
      </Button>
    </View>
  );
}

export default CurrencyButton

<CurrencyButton onPress={() => handleCurrencyChange("USD")}
title="USD" />