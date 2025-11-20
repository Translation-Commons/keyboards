/*
  laz1 1.0 generated from template. Using Laz words from the web.
  
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['../../lzz_words.tsv'],
};
export default source;
