
export const Currencies = [
    {value : "USD", label : "United States Dollar", locale: "en-US"},
    {value : "EUR", label : "Euro", locale: "de-DE"},
    {value : "JPY", label : "Japanese Yen", locale: "ja-JP"},
    {value : "GBP", label : "British Pound", locale: "en-GB"},
    {value : "SEK", label : "Swedish Krona", locale: "sv-SE"},
];

export type Currency = typeof Currencies[0];