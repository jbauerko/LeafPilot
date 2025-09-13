export type RawLatexCommand = {
  label: string;
  insertText?: string;
  kind?: number;
  documentation?: string;
  insertTextRules?: number;
};

export enum CompletionItemKind {
  Text = 18,
  Method = 0,
  Function = 1,
  Constructor = 2,
  Field = 3,
  Variable = 4,
  Class = 5,
  Interface = 7,
  Module = 8,
  Property = 9,
  Unit = 10,
  Value = 10,
  Enum = 11,
  Keyword = 12,
  Snippet = 13,
  Color = 14,
  File = 15,
  Reference = 16,
  Folder = 17,
  EnumMember = 18,
  Constant = 19,
  Struct = 20,
  Event = 21,
  Operator = 22,
  TypeParameter = 23,
}

export enum CompletionItemInsertTextRule {
  None = 0,
  KeepWhitespace = 1,
  InsertAsSnippet = 4,
}

export type ITextModel = {
  getWordUntilPosition: (pos: Position) => { startColumn: number; endColumn: number };
};

export type Position = {
  lineNumber: number;
  column: number;
};

export type IRange = {
  startLineNumber: number;
  endLineNumber: number;
  startColumn: number;
  endColumn: number;
};

export type CompletionItem = {
  label: string;
  kind: CompletionItemKind;
  insertText: string;
  insertTextRules: CompletionItemInsertTextRule;
  documentation?: string;
  range: IRange;
};

export type CompletionList = {
  suggestions: CompletionItem[];
};

// Raw command list (generated from your PDF).
export const RAW_LATEX_COMMANDS: RawLatexCommand[] = [
  {
    label: `\\!`,
    insertText: `\\!`,
    kind: CompletionItemKind.Function,
    documentation: `|n e g a t i v et h i ns p a c e= −1`
  },
  {
    label: `\\"`,
    insertText: `\\"`,
    kind: CompletionItemKind.Function,
    documentation: `makes an umlaut, as ¨ o.`
  },
  {
    label: `\\#`,
    insertText: `\\#`,
    kind: CompletionItemKind.Function,
    documentation: `prints a pound sign: #.`
  },
  {
    label: `\\$`,
    insertText: `\\$`,
    kind: CompletionItemKind.Function,
    documentation: `prints a dollar sign: \\$.`
  },
  {
    label: `\\%`,
    insertText: `\\%`,
    kind: CompletionItemKind.Function,
    documentation: `prints a percent sign: %.`
  },
  {
    label: `\\&`,
    insertText: `\\&`,
    kind: CompletionItemKind.Function,
    documentation: `prints an ampersand: &.`
  },
  {
    label: `\\’`,
    insertText: `\\’`,
    kind: CompletionItemKind.Function,
    documentation: `intabbing environment moves current column`
  },
  {
    label: `\\(`,
    insertText: `\\(`,
    kind: CompletionItemKind.Function,
    documentation: `| start math mode. Same as \\begin{math}`
  },
  {
    label: `\\)`,
    insertText: `\\)`,
    kind: CompletionItemKind.Function,
    documentation: `| end math mode. Same as \\end{math} or\\$.`
  },
  {
    label: `\\*`,
    insertText: `\\*`,
    kind: CompletionItemKind.Function,
    documentation: `is a discretionary multiplication sign, at which`
  },
  {
    label: `\\+`,
    insertText: `\\+`,
    kind: CompletionItemKind.Function,
    documentation: `moves left margin to the right by one tab stop.`
  },
  {
    label: `\\,`,
    insertText: `\\,`,
    kind: CompletionItemKind.Function,
    documentation: `|t h i ns p a c e=1`
  },
  {
    label: `\\-`,
    insertText: `\\-`,
    kind: CompletionItemKind.Function,
    documentation: `intabbing environment, moves left margin to`
  },
  {
    label: `\\.`,
    insertText: `\\.`,
    kind: CompletionItemKind.Function,
    documentation: `puts a dot accent over a letter, as _ o.`
  },
  {
    label: `\\/`,
    insertText: `\\/`,
    kind: CompletionItemKind.Function,
    documentation: `inserts italics adjustment space.`
  },
  {
    label: `\\:`,
    insertText: `\\:`,
    kind: CompletionItemKind.Function,
    documentation: `| medium space =2`
  },
  {
    label: `\\;`,
    insertText: `\\;`,
    kind: CompletionItemKind.Function,
    documentation: `|t h i c ks p a c e=5`
  },
  {
    label: `\\<`,
    insertText: `\\<`,
    kind: CompletionItemKind.Function,
    documentation: `intabbing environment, puts text to left of`
  },
  {
    label: `\\=`,
    insertText: `\\=`,
    kind: CompletionItemKind.Function,
    documentation: `intabbing environment, sets a tab stop.`
  },
  {
    label: `\\>`,
    insertText: `\\>`,
    kind: CompletionItemKind.Function,
    documentation: `intabbing environment is a forward tab.`
  },
  {
    label: `\\@declares`,
    insertText: `\\@declares`,
    kind: CompletionItemKind.Function,
    documentation: `the period that follows is to be a`
  },
  {
    label: `\\[`,
    insertText: `\\[`,
    kind: CompletionItemKind.Function,
    documentation: `|s a m ea s \\begin{displaymath} or\\$\\$.`
  },
  {
    label: `\\\\`,
    insertText: `\\\\`,
    kind: CompletionItemKind.Function,
    documentation: `terminates a line.\\\\*terminates a line, but disallows a pagebreak.`
  },
  {
    label: `\\]`,
    insertText: `\\]`,
    kind: CompletionItemKind.Function,
    documentation: `|s a m ea s \\end{displaymath} or\\$\\$.`
  },
  {
    label: `\\^`,
    insertText: `\\^`,
    kind: CompletionItemKind.Function,
    documentation: `makes a circumﬂex, as ^ o.`
  },
  {
    label: `\\_`,
    insertText: `\\_`,
    kind: CompletionItemKind.Function,
    documentation: `is an underscore, as in hours worked .`
  },
  {
    label: `\\‘`,
    insertText: `\\‘`,
    kind: CompletionItemKind.Function,
    documentation: `intabbing environment moves all text which`
  },
  {
    label: `\\{`,
    insertText: `\\{`,
    kind: CompletionItemKind.Function,
    documentation: `prints a curly left brace: f.`
  },
  {
    label: `\\|`,
    insertText: `\\|`,
    kind: CompletionItemKind.Function,
    documentation: `isk(math mode).`
  },
  {
    label: `\\}`,
    insertText: `\\}`,
    kind: CompletionItemKind.Function,
    documentation: `prints a curly right brace: g.`
  },
  {
    label: `\\~`,
    insertText: `\\~`,
    kind: CompletionItemKind.Function,
    documentation: `makes a tilde, as ~ n.`
  },
  {
    label: `\\a`,
    insertText: `a`,
    kind: CompletionItemKind.Function,
    documentation: `’makes an acute accent in tabbing`
  },
  {
    label: `\\a`,
    insertText: `a`,
    kind: CompletionItemKind.Function,
    documentation: `‘makes a grave accent in tabbing`
  },
  {
    label: `\\a`,
    insertText: `a`,
    kind: CompletionItemKind.Function,
    documentation: `=makes a macron accent in tabbing`
  },
  {
    label: `\\aais`,
    insertText: `aais`,
    kind: CompletionItemKind.Function,
    documentation: `a.\AAisA.`
  },
  {
    label: `\\acute`,
    insertText: `acute`,
    kind: CompletionItemKind.Function,
    documentation: `makes an acute accent:  a(math mode).`
  },
  {
    label: `\\addcontentsline`,
    insertText: `addcontentsline`,
    kind: CompletionItemKind.Function,
    documentation: `{toc}{section}{name} adds`
  },
  {
    label: `\\address`,
    insertText: `address`,
    kind: CompletionItemKind.Function,
    documentation: `{text} declares the return address in`
  },
  {
    label: `\\addtocontents`,
    insertText: `addtocontents`,
    kind: CompletionItemKind.Function,
    documentation: `{toc}{text} writestext to the`
  },
  {
    label: `\\addtocounter`,
    insertText: `addtocounter`,
    kind: CompletionItemKind.Function,
    documentation: `{name}{amount} addsamount to`
  },
  {
    label: `\\addtolength`,
    insertText: `addtolength`,
    kind: CompletionItemKind.Function,
    documentation: `{nl}{length} addslength to`
  },
  {
    label: `\\newlength`,
    insertText: `newlength`,
    kind: CompletionItemKind.Function,
    documentation: `,settowidth .`
  },
  {
    label: `\\aeis`,
    insertText: `aeis`,
    kind: CompletionItemKind.Function,
    documentation: `.AEis`
  },
  {
    label: `\\aleph`,
    insertText: `aleph`,
    kind: CompletionItemKind.Function,
    documentation: `is@(math mode).`
  },
  {
    label: `\\alph`,
    insertText: `alph`,
    kind: CompletionItemKind.Function,
    documentation: `{counter} printscounter as lower-case`
  },
  {
    label: `\\alpha`,
    insertText: `alpha`,
    kind: CompletionItemKind.Function,
    documentation: `is`
  },
  {
    label: `\\amalg`,
    insertText: `amalg`,
    kind: CompletionItemKind.Function,
    documentation: `isq(math mode).`
  },
  {
    label: `\\and`,
    insertText: `and`,
    kind: CompletionItemKind.Function,
    documentation: `separates multiple authors for the`
  },
  {
    label: `\\maketitle`,
    insertText: `maketitle`,
    kind: CompletionItemKind.Function,
    documentation: `command.`
  },
  {
    label: `\\angle`,
    insertText: `angle`,
    kind: CompletionItemKind.Function,
    documentation: `is6(math mode).`
  },
  {
    label: `\\appendix`,
    insertText: `appendix`,
    kind: CompletionItemKind.Function,
    documentation: `starts appendices.`
  },
  {
    label: `\\approx`,
    insertText: `approx`,
    kind: CompletionItemKind.Function,
    documentation: `is(math mode).`
  },
  {
    label: `\\arabic`,
    insertText: `arabic`,
    kind: CompletionItemKind.Function,
    documentation: `{counter} printscounter as arabic`
  },
  {
    label: `\\arccos`,
    insertText: `arccos`,
    kind: CompletionItemKind.Function,
    documentation: `is arccos (math mode).`
  },
  {
    label: `\\arcsin`,
    insertText: `arcsin`,
    kind: CompletionItemKind.Function,
    documentation: `is arcsin (math mode).`
  },
  {
    label: `\\arctan`,
    insertText: `arctan`,
    kind: CompletionItemKind.Function,
    documentation: `is arctan (math mode).`
  },
  {
    label: `\\arg`,
    insertText: `arg`,
    kind: CompletionItemKind.Function,
    documentation: `is arg (math mode).`
  },
  {
    label: `\\arraycolsep`,
    insertText: `arraycolsep`,
    kind: CompletionItemKind.Function,
    documentation: `| width of the space between`
  },
  {
    label: `\\arrayrulewidth`,
    insertText: `arrayrulewidth`,
    kind: CompletionItemKind.Function,
    documentation: `| width of the rule created in`
  },
  {
    label: `\\arraystretch`,
    insertText: `arraystretch`,
    kind: CompletionItemKind.Function,
    documentation: `| scale factor for interrow`
  },
  {
    label: `\\ast`,
    insertText: `ast`,
    kind: CompletionItemKind.Function,
    documentation: `is(math mode).`
  },
  {
    label: `\\asymp`,
    insertText: `asymp`,
    kind: CompletionItemKind.Function,
    documentation: `is(math mode).`
  },
  {
    label: `\\author`,
    insertText: `author`,
    kind: CompletionItemKind.Function,
    documentation: `{names} declares author(s) for the`
  },
  {
    label: `\\maketitle`,
    insertText: `maketitle`,
    kind: CompletionItemKind.Function,
    documentation: `command.`
  },
  {
    label: `\\bis`,
    insertText: `bis`,
    kind: CompletionItemKind.Function,
    documentation: `a bar-under" accent, as o.`
  },
  {
    label: `\\backslash`,
    insertText: `backslash`,
    kind: CompletionItemKind.Function,
    documentation: `isn(math mode).`
  },
  {
    label: `\\bar`,
    insertText: `bar`,
    kind: CompletionItemKind.Function,
    documentation: `puts a macron over a letter:  a(math mode).`
  },
  {
    label: `\\baselineskip`,
    insertText: `baselineskip`,
    kind: CompletionItemKind.Function,
    documentation: `| distance from bottom of one`
  },
  {
    label: `\\baselinestretch`,
    insertText: `baselinestretch`,
    kind: CompletionItemKind.Function,
    documentation: `|f a c t o rb yw h i c h`
  },
  {
    label: `\\baselineskip`,
    insertText: `baselineskip`,
    kind: CompletionItemKind.Function,
    documentation: `is multiplied each time a type`
  },
  {
    label: `\\begin`,
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: `{ environment }| always paired with`
  },
  {
    label: `\\end`,
    insertText: "end{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{ environment }. Following are the assorted"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{abstract} starts an environment for"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{array}{lrc} starts array environment"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{center} starts an environment in which"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{description} starts a labeled list. Items"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{displaymath} sets mathematics on lines"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{document} starts the actual text of a"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{enumerate} starts a numbered list."
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{eqnarray} starts adisplaymath"
  },
  {
    label: "\\",
    insertText: "",
    kind: CompletionItemKind.Function,
    documentation: "or\\\*;u s e\nonumber to suppress"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{eqnarray*} begins an environment like"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{equation} starts adisplaymath"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{figure*}[pos] begins a"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{flushleft} starts environment with"
  },
  {
    label: "\\",
    insertText: "",
    kind: CompletionItemKind.Function,
    documentation: ".S e e\\raggedright ."
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{flushright} starts environment with"
  },
  {
    label: "\\",
    insertText: "",
    kind: CompletionItemKind.Function,
    documentation: ".S e e\\raggedleft ."
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{itemize} starts a \\bulleted ( ) list."
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{list}{labeling}{spacing} starts a"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{math} starts a math display like this:"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{minipage}[pos]{vsize} starts a box of"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{picture} (x;y)(xl;yl) starts a picture"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{quotation} starts an environment with"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{quote} starts an environment with wider"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{tabbing} starts a columnar environment."
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{table}[pos] begins a ﬂoating"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{table*}[pos] begins a two-column-wide"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{tabular}{arg} starts an array"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{theorem} |s e e\\newtheorem ."
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{titlepage} is an environment with no"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{verbatim} starts an environment which"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{verse} starts an environment for poetry"
  },
  {
    label: "\\beta",
    insertText: "beta",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\bfswitches",
    insertText: "bfswitches",
    kind: CompletionItemKind.Function,
    documentation: "to bold face type."
  },
  {
    label: "\\bibitem",
    insertText: "bibitem{${1:key}}$0",
    kind: CompletionItemKind.Reference,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{ref} text creates a bibliography entry"
  },
  {
    label: "\\bibliography",
    insertText: "bibliography",
    kind: CompletionItemKind.Function,
    documentation: "{file} | insert bibliography"
  },
  {
    label: "\\bibliographystyle",
    insertText: "bibliographystyle",
    kind: CompletionItemKind.Function,
    documentation: "{style} | a format"
  },
  {
    label: "\\bigcap",
    insertText: "bigcap",
    kind: CompletionItemKind.Function,
    documentation: "isT(math mode)."
  },
  {
    label: "\\bigcirc",
    insertText: "bigcirc",
    kind: CompletionItemKind.Function,
    documentation: "is/circlecopyrt(math mode)."
  },
  {
    label: "\\bigcup",
    insertText: "bigcup",
    kind: CompletionItemKind.Function,
    documentation: "isS(math mode)."
  },
  {
    label: "\\bigodot",
    insertText: "bigodot",
    kind: CompletionItemKind.Function,
    documentation: "isJ(math mode)."
  },
  {
    label: "\\bigoplus",
    insertText: "bigoplus",
    kind: CompletionItemKind.Function,
    documentation: "isL(math mode)."
  },
  {
    label: "\\bigotimes",
    insertText: "bigotimes",
    kind: CompletionItemKind.Function,
    documentation: "isN(math mode)."
  },
  {
    label: "\\bigtriangledown",
    insertText: "bigtriangledown",
    kind: CompletionItemKind.Function,
    documentation: "is5(math mode)."
  },
  {
    label: "\\bigtriangleup",
    insertText: "bigtriangleup",
    kind: CompletionItemKind.Function,
    documentation: "is4(math mode)."
  },
  {
    label: "\\bigskip",
    insertText: "bigskip",
    kind: CompletionItemKind.Function,
    documentation: "| standard \\big vertical skip."
  },
  {
    label: "\\bigskipamount",
    insertText: "bigskipamount",
    kind: CompletionItemKind.Function,
    documentation: "| default length for \\bigskip ."
  },
  {
    label: "\\bigsqcup",
    insertText: "bigsqcup",
    kind: CompletionItemKind.Function,
    documentation: "isF(math mode)."
  },
  {
    label: "\\biguplus",
    insertText: "biguplus",
    kind: CompletionItemKind.Function,
    documentation: "isU(math mode)."
  },
  {
    label: "\\bigvee",
    insertText: "bigvee",
    kind: CompletionItemKind.Function,
    documentation: "isW(math mode)."
  },
  {
    label: "\\bigwedge",
    insertText: "bigwedge",
    kind: CompletionItemKind.Function,
    documentation: "isV(math mode)."
  },
  {
    label: "\\bmod",
    insertText: "bmod",
    kind: CompletionItemKind.Function,
    documentation: "is binary modulo expression umodm"
  },
  {
    label: "\\boldmath",
    insertText: "boldmath",
    kind: CompletionItemKind.Function,
    documentation: "changes math italics and math"
  },
  {
    label: "\\bot",
    insertText: "bot",
    kind: CompletionItemKind.Function,
    documentation: "is?(math mode)."
  },
  {
    label: "\\bottomfraction",
    insertText: "bottomfraction",
    kind: CompletionItemKind.Function,
    documentation: "| maximum fraction of page"
  },
  {
    label: "\\bowtie",
    insertText: "bowtie",
    kind: CompletionItemKind.Function,
    documentation: "is./(math mode)."
  },
  {
    label: "\\Box",
    insertText: "Box",
    kind: CompletionItemKind.Function,
    documentation: "is2(math mode)."
  },
  {
    label: "\\breve",
    insertText: "breve",
    kind: CompletionItemKind.Function,
    documentation: "makes a breve accent:  a(math mode)."
  },
  {
    label: "\\bullet",
    insertText: "bullet",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\cis",
    insertText: "cis",
    kind: CompletionItemKind.Function,
    documentation: "a cedilla, as  c."
  },
  {
    label: "\\cal",
    insertText: "cal",
    kind: CompletionItemKind.Function,
    documentation: "produces calligraphic letters, as B(math"
  },
  {
    label: "\\caption",
    insertText: "caption",
    kind: CompletionItemKind.Function,
    documentation: "[loftitle]{text} creates a numbered"
  },
  {
    label: "\\cc",
    insertText: "cc",
    kind: CompletionItemKind.Function,
    documentation: "{text} declares list of copy recipients for"
  },
  {
    label: "\\cdot",
    insertText: "cdot",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\cdots",
    insertText: "cdots",
    kind: CompletionItemKind.Function,
    documentation: "makes three dots centered on the line: "
  },
  {
    label: "\\centering",
    insertText: "centering",
    kind: CompletionItemKind.Function,
    documentation: "declares that all text following is to"
  },
  {
    label: "\\chapter",
    insertText: "chapter{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[toctitle]{text} begins a new"
  },
  {
    label: "\\chapter",
    insertText: "chapter{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "*{title} is like\\chapter{title} , but"
  },
  {
    label: "\\check",
    insertText: "check",
    kind: CompletionItemKind.Function,
    documentation: "makes a h acek, as a(math mode)."
  },
  {
    label: "\\chi",
    insertText: "chi",
    kind: CompletionItemKind.Function,
    documentation: "is (math mode)."
  },
  {
    label: "\\circ",
    insertText: "circ",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\circle",
    insertText: "circle",
    kind: CompletionItemKind.Function,
    documentation: "{diameter} as a valid argument for \\put"
  },
  {
    label: "\\circle",
    insertText: "circle",
    kind: CompletionItemKind.Function,
    documentation: "*{diameter} is like\\circle , but draws"
  },
  {
    label: "\\cite",
    insertText: "cite{${1:key}}$0",
    kind: CompletionItemKind.Reference,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[subcit]{ref} produces a reference, in"
  },
  {
    label: "\\cleardoublepage",
    insertText: "cleardoublepage",
    kind: CompletionItemKind.Function,
    documentation: "forces next page to be a"
  },
  {
    label: "\\clearpage",
    insertText: "clearpage",
    kind: CompletionItemKind.Function,
    documentation: "ends a page where it is, and puts"
  },
  {
    label: "\\cline",
    insertText: "cline",
    kind: CompletionItemKind.Function,
    documentation: "{i-j} draws a horizontal line across"
  },
  {
    label: "\\closing",
    insertText: "closing",
    kind: CompletionItemKind.Function,
    documentation: "{text} declares the closing in letter"
  },
  {
    label: "\\clubsuit",
    insertText: "clubsuit",
    kind: CompletionItemKind.Function,
    documentation: "is|(math mode)."
  },
  {
    label: "\\columnsep",
    insertText: "columnsep",
    kind: CompletionItemKind.Function,
    documentation: "| distance between columns in"
  },
  {
    label: "\\columnseprule",
    insertText: "columnseprule",
    kind: CompletionItemKind.Function,
    documentation: "| width of the rule between"
  },
  {
    label: "\\columnwidth",
    insertText: "columnwidth",
    kind: CompletionItemKind.Function,
    documentation: "| width of the current column."
  },
  {
    label: "\\cong",
    insertText: "cong",
    kind: CompletionItemKind.Function,
    documentation: "is=(math mode)."
  },
  {
    label: "\\coprod",
    insertText: "coprod",
    kind: CompletionItemKind.Function,
    documentation: "is‘(math mode)."
  },
  {
    label: "\\copyright",
    insertText: "copyright",
    kind: CompletionItemKind.Function,
    documentation: "isc/circlecopyrt."
  },
  {
    label: "\\cos",
    insertText: "cos",
    kind: CompletionItemKind.Function,
    documentation: "is cos (math mode)."
  },
  {
    label: "\\cosh",
    insertText: "cosh",
    kind: CompletionItemKind.Function,
    documentation: "is cosh (math mode)."
  },
  {
    label: "\\cot",
    insertText: "cot",
    kind: CompletionItemKind.Function,
    documentation: "is cot (math mode)."
  },
  {
    label: "\\coth",
    insertText: "coth",
    kind: CompletionItemKind.Function,
    documentation: "is coth (math mode)."
  },
  {
    label: "\\csc",
    insertText: "csc",
    kind: CompletionItemKind.Function,
    documentation: "is csc (math mode)."
  },
  {
    label: "\\cup",
    insertText: "cup",
    kind: CompletionItemKind.Function,
    documentation: "is[(math mode)."
  },
  {
    label: "\\dis",
    insertText: "dis",
    kind: CompletionItemKind.Function,
    documentation: "a \\dot under accent, as o .."
  },
  {
    label: "\\dag",
    insertText: "dag",
    kind: CompletionItemKind.Function,
    documentation: "isy."
  },
  {
    label: "\\dagger",
    insertText: "dagger",
    kind: CompletionItemKind.Function,
    documentation: "isy(math mode)."
  },
  {
    label: "\\dashbox",
    insertText: "dashbox",
    kind: CompletionItemKind.Function,
    documentation: "{dwid}(width,height)[pos]{text}"
  },
  {
    label: "\\dashv",
    insertText: "dashv",
    kind: CompletionItemKind.Function,
    documentation: "isa(math mode)."
  },
  {
    label: "\\date",
    insertText: "date",
    kind: CompletionItemKind.Function,
    documentation: "{adate} declares the date for the"
  },
  {
    label: "\\maketitle",
    insertText: "maketitle",
    kind: CompletionItemKind.Function,
    documentation: "command. The default is \\today ."
  },
  {
    label: "\\day",
    insertText: "day",
    kind: CompletionItemKind.Function,
    documentation: "| current day of the month."
  },
  {
    label: "\\dblfloatpagefraction",
    insertText: "dblfloatpagefraction",
    kind: CompletionItemKind.Function,
    documentation: "| minimum fraction of"
  },
  {
    label: "\\dblfloatsep",
    insertText: "dblfloatsep",
    kind: CompletionItemKind.Function,
    documentation: "| distance between ﬂoats at the"
  },
  {
    label: "\\dbltextfloatsep",
    insertText: "dbltextfloatsep",
    kind: CompletionItemKind.Function,
    documentation: "| distance between"
  },
  {
    label: "\\dbltopfraction",
    insertText: "dbltopfraction",
    kind: CompletionItemKind.Function,
    documentation: "| maximum fraction at the"
  },
  {
    label: "\\ddag",
    insertText: "ddag",
    kind: CompletionItemKind.Function,
    documentation: "isz."
  },
  {
    label: "\\ddagger",
    insertText: "ddagger",
    kind: CompletionItemKind.Function,
    documentation: "isz(math mode)."
  },
  {
    label: "\\ddot",
    insertText: "ddot",
    kind: CompletionItemKind.Function,
    documentation: "makes a dieresis over a letter: ¨ a(math"
  },
  {
    label: "\\ddots",
    insertText: "ddots",
    kind: CompletionItemKind.Function,
    documentation: "produces a diagonal ellipsis...(math"
  },
  {
    label: "\\deg",
    insertText: "deg",
    kind: CompletionItemKind.Function,
    documentation: "is deg (math mode)."
  },
  {
    label: "\\delta",
    insertText: "delta",
    kind: CompletionItemKind.Function,
    documentation: "is.\\Delta is  (math mode)."
  },
  {
    label: "\\det",
    insertText: "det",
    kind: CompletionItemKind.Function,
    documentation: "is det (math mode)."
  },
  {
    label: "\\diamond",
    insertText: "diamond",
    kind: CompletionItemKind.Function,
    documentation: "is.\\Diamond is3(both math mode)."
  },
  {
    label: "\\diamondsuit",
    insertText: "diamondsuit",
    kind: CompletionItemKind.Function,
    documentation: "is}(math mode)."
  },
  {
    label: "\\dim",
    insertText: "dim",
    kind: CompletionItemKind.Function,
    documentation: "is dim (math mode)."
  },
  {
    label: "\\displaystyle",
    insertText: "displaystyle",
    kind: CompletionItemKind.Function,
    documentation: "switches to displaymath or"
  },
  {
    label: "\\div",
    insertText: "div",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode).\\documentstyle[substy]{sty} determines"
  },
  {
    label: "\\dot",
    insertText: "dot",
    kind: CompletionItemKind.Function,
    documentation: "makes a dot over a letter: _ a(math mode)."
  },
  {
    label: "\\doteq",
    insertText: "doteq",
    kind: CompletionItemKind.Function,
    documentation: "is:= (math mode)."
  },
  {
    label: "\\dotfill",
    insertText: "dotfill",
    kind: CompletionItemKind.Function,
    documentation: "expands to"
  },
  {
    label: "\\doublerulesep",
    insertText: "doublerulesep",
    kind: CompletionItemKind.Function,
    documentation: "| horizontal distance between"
  },
  {
    label: "\\downarrow",
    insertText: "downarrow",
    kind: CompletionItemKind.Function,
    documentation: "is#.\\Downarrow is+(math mode)."
  },
  {
    label: "\\ell",
    insertText: "ell",
    kind: CompletionItemKind.Function,
    documentation: "is‘(math mode)."
  },
  {
    label: "\\emtoggles",
    insertText: "emtoggles",
    kind: CompletionItemKind.Function,
    documentation: "between roman and italic fonts for"
  },
  {
    label: "\\emptyset",
    insertText: "emptyset",
    kind: CompletionItemKind.Function,
    documentation: "is;(math mode)."
  },
  {
    label: "\\encl",
    insertText: "encl",
    kind: CompletionItemKind.Function,
    documentation: "{text} declares a list of enclosures for"
  },
  {
    label: "\\end",
    insertText: "end{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{ environment }ends an environment begun"
  },
  {
    label: "\\epsilon",
    insertText: "epsilon",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\equiv",
    insertText: "equiv",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\eta",
    insertText: "eta",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\evensidemargin",
    insertText: "evensidemargin",
    kind: CompletionItemKind.Function,
    documentation: "| distance between left side of"
  },
  {
    label: "\\exists",
    insertText: "exists",
    kind: CompletionItemKind.Function,
    documentation: "is9(math mode)."
  },
  {
    label: "\\exp",
    insertText: "exp",
    kind: CompletionItemKind.Function,
    documentation: "is exp (math mode)."
  },
  {
    label: "\\fbox",
    insertText: "fbox",
    kind: CompletionItemKind.Function,
    documentation: "{text} makes a framed box aroundtext ."
  },
  {
    label: "\\fboxrule",
    insertText: "fboxrule",
    kind: CompletionItemKind.Function,
    documentation: "| thickness of ruled frame for \\fbox"
  },
  {
    label: "\\fboxsep",
    insertText: "fboxsep",
    kind: CompletionItemKind.Function,
    documentation: "| space between frame and text for"
  },
  {
    label: "\\fbox",
    insertText: "fbox",
    kind: CompletionItemKind.Function,
    documentation: "and\\framebox ."
  },
  {
    label: "\\fill",
    insertText: "fill",
    kind: CompletionItemKind.Function,
    documentation: "| rubber length (glue) that can stretch to"
  },
  {
    label: "\\flat",
    insertText: "flat",
    kind: CompletionItemKind.Function,
    documentation: "is[(math mode)."
  },
  {
    label: "\\floatpagefraction",
    insertText: "floatpagefraction",
    kind: CompletionItemKind.Function,
    documentation: "| minimum fraction of a"
  },
  {
    label: "\\floatsep",
    insertText: "floatsep",
    kind: CompletionItemKind.Function,
    documentation: "| distance between ﬂoats that appear"
  },
  {
    label: "\\flushbottom",
    insertText: "flushbottom",
    kind: CompletionItemKind.Function,
    documentation: "causes pages to be stretched to"
  },
  {
    label: "\\textheight",
    insertText: "textheight",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\fnsymbol",
    insertText: "fnsymbol",
    kind: CompletionItemKind.Function,
    documentation: "{counter} printscounter as one of"
  },
  {
    label: "\\footheight",
    insertText: "footheight",
    kind: CompletionItemKind.Function,
    documentation: "| height of box at bottom of page"
  },
  {
    label: "\\footnote",
    insertText: "footnote",
    kind: CompletionItemKind.Function,
    documentation: "{text} creates a footnote of text ."
  },
  {
    label: "\\footnotemark",
    insertText: "footnotemark",
    kind: CompletionItemKind.Function,
    documentation: "puts a footnote number into the"
  },
  {
    label: "\\footnotesep",
    insertText: "footnotesep",
    kind: CompletionItemKind.Function,
    documentation: "| height of strut placed at"
  },
  {
    label: "\\footnotesize",
    insertText: "footnotesize",
    kind: CompletionItemKind.Function,
    documentation: "switches to footnote-sized type."
  },
  {
    label: "\\footskip",
    insertText: "footskip",
    kind: CompletionItemKind.Function,
    documentation: "| vertical distance between bottom of"
  },
  {
    label: "\\footnotetext",
    insertText: "footnotetext",
    kind: CompletionItemKind.Function,
    documentation: "{text} speci"
  },
  {
    label: "\\forall",
    insertText: "forall",
    kind: CompletionItemKind.Function,
    documentation: "is8(math mode)."
  },
  {
    label: "\\frac",
    insertText: "frac{${1:num}}{${2:den}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{numerator}{denominator} produces a"
  },
  {
    label: "\\frame",
    insertText: "frame",
    kind: CompletionItemKind.Function,
    documentation: "{text} makes a framed (outlined) box"
  },
  {
    label: "\\framebox",
    insertText: "framebox",
    kind: CompletionItemKind.Function,
    documentation: "[size][pos]{text} produces a"
  },
  {
    label: "\\framebox",
    insertText: "framebox",
    kind: CompletionItemKind.Function,
    documentation: "(width,height)[pos]{text}"
  },
  {
    label: "\\frown",
    insertText: "frown",
    kind: CompletionItemKind.Function,
    documentation: "is_(math mode)."
  },
  {
    label: "\\fussy",
    insertText: "fussy",
    kind: CompletionItemKind.Function,
    documentation: "is the default declaration for the"
  },
  {
    label: "\\gamma",
    insertText: "gamma",
    kind: CompletionItemKind.Function,
    documentation: "isγ.\\Gamma is Γ (math mode)."
  },
  {
    label: "\\gcd",
    insertText: "gcd",
    kind: CompletionItemKind.Function,
    documentation: "is gcd (math mode)."
  },
  {
    label: "\\geis",
    insertText: "geis",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\geq",
    insertText: "geq",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\gets",
    insertText: "gets",
    kind: CompletionItemKind.Function,
    documentation: "is (math mode)."
  },
  {
    label: "\\ggis",
    insertText: "ggis",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\glossary",
    insertText: "glossary",
    kind: CompletionItemKind.Function,
    documentation: "{text} appendstext to the.glo"
  },
  {
    label: "\\glossaryentry",
    insertText: "glossaryentry",
    kind: CompletionItemKind.Function,
    documentation: "{text}{ref} is written to the"
  },
  {
    label: "\\grave",
    insertText: "grave",
    kind: CompletionItemKind.Function,
    documentation: "makes a grave accent:  a(math mode)."
  },
  {
    label: "\\Hprints",
    insertText: "Hprints",
    kind: CompletionItemKind.Function,
    documentation: "a long Hungarian umlaut, as } o."
  },
  {
    label: "\\hat",
    insertText: "hat",
    kind: CompletionItemKind.Function,
    documentation: "makes a circumﬂex: ^ a(math mode)."
  },
  {
    label: "\\hbar",
    insertText: "hbar",
    kind: CompletionItemKind.Function,
    documentation: "is h(math mode)."
  },
  {
    label: "\\headheight",
    insertText: "headheight",
    kind: CompletionItemKind.Function,
    documentation: "| height of box at top of page that"
  },
  {
    label: "\\heartsuit",
    insertText: "heartsuit",
    kind: CompletionItemKind.Function,
    documentation: "is~(math mode)."
  },
  {
    label: "\\hfill",
    insertText: "hfill",
    kind: CompletionItemKind.Function,
    documentation: "is\\hspace{\fill} (cf.\fill )."
  },
  {
    label: "\\hline",
    insertText: "hline",
    kind: CompletionItemKind.Function,
    documentation: "draws a horizontal line across all columns"
  },
  {
    label: "\\hom",
    insertText: "hom",
    kind: CompletionItemKind.Function,
    documentation: "is hom (math mode)."
  },
  {
    label: "\\hookleftarrow",
    insertText: "hookleftarrow",
    kind: CompletionItemKind.Function,
    documentation: "is -(math mode)."
  },
  {
    label: "\\hookrightarrow",
    insertText: "hookrightarrow",
    kind: CompletionItemKind.Function,
    documentation: "is,!(math mode)."
  },
  {
    label: "\\hrulefill",
    insertText: "hrulefill",
    kind: CompletionItemKind.Function,
    documentation: "expands to"
  },
  {
    label: "\\hspace",
    insertText: "hspace",
    kind: CompletionItemKind.Function,
    documentation: "{len} leaves a horizontal space of"
  },
  {
    label: "\\hspace",
    insertText: "hspace",
    kind: CompletionItemKind.Function,
    documentation: "*{len} is like\\hspace{len} but space is"
  },
  {
    label: "\\huge",
    insertText: "huge",
    kind: CompletionItemKind.Function,
    documentation: "switches to a very large typeface. \\Huge is"
  },
  {
    label: "\\hyphenation",
    insertText: "hyphenation",
    kind: CompletionItemKind.Function,
    documentation: "{wordlist} declares hyphenation"
  },
  {
    label: "\\iis",
    insertText: "iis",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\iff",
    insertText: "iff",
    kind: CompletionItemKind.Function,
    documentation: "is() (math mode)."
  },
  {
    label: "\\Imis",
    insertText: "Imis",
    kind: CompletionItemKind.Function,
    documentation: "=(math mode)."
  },
  {
    label: "\\imath",
    insertText: "imath",
    kind: CompletionItemKind.Function,
    documentation: "is{(math mode)."
  },
  {
    label: "\\inis",
    insertText: "inis",
    kind: CompletionItemKind.Function,
    documentation: "2(math mode)."
  },
  {
    label: "\\include",
    insertText: "include",
    kind: CompletionItemKind.Function,
    documentation: "{filename} brings in filename text at"
  },
  {
    label: "\\includeonly",
    insertText: "includeonly",
    kind: CompletionItemKind.Function,
    documentation: "{file1,file2,...} limits"
  },
  {
    label: "\\index",
    insertText: "index",
    kind: CompletionItemKind.Function,
    documentation: "{text} appendstext to the.idx"
  },
  {
    label: "\\indexentry",
    insertText: "indexentry",
    kind: CompletionItemKind.Function,
    documentation: "{text}{ref} is written to the .idx"
  },
  {
    label: "\\indexspace",
    insertText: "indexspace",
    kind: CompletionItemKind.Function,
    documentation: "puts blank space before"
  },
  {
    label: "\\inf",
    insertText: "inf",
    kind: CompletionItemKind.Function,
    documentation: "is inf (math mode)."
  },
  {
    label: "\\infty",
    insertText: "infty",
    kind: CompletionItemKind.Function,
    documentation: "is1(math mode)."
  },
  {
    label: "\\input",
    insertText: "input",
    kind: CompletionItemKind.Function,
    documentation: "{file} brings in text from file.tex at"
  },
  {
    label: "\\int",
    insertText: "int",
    kind: CompletionItemKind.Function,
    documentation: "isR"
  },
  {
    label: "\\intextsep",
    insertText: "intextsep",
    kind: CompletionItemKind.Function,
    documentation: "| vertical space placed above and"
  },
  {
    label: "\\iota",
    insertText: "iota",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\itswitches",
    insertText: "itswitches",
    kind: CompletionItemKind.Function,
    documentation: "to Italic type."
  },
  {
    label: "\\item",
    insertText: "item",
    kind: CompletionItemKind.Function,
    documentation: "[text] indicates a list entry. text is"
  },
  {
    label: "\\itemindent",
    insertText: "itemindent",
    kind: CompletionItemKind.Function,
    documentation: "| extra indentation before label in"
  },
  {
    label: "\\itemsep",
    insertText: "itemsep",
    kind: CompletionItemKind.Function,
    documentation: "| vertical space between successive list"
  },
  {
    label: "\\jis",
    insertText: "jis",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\jmath",
    insertText: "jmath",
    kind: CompletionItemKind.Function,
    documentation: "is|(math mode)."
  },
  {
    label: "\\Join",
    insertText: "Join",
    kind: CompletionItemKind.Function,
    documentation: "is1(math mode)."
  },
  {
    label: "\\kappa",
    insertText: "kappa",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\ker",
    insertText: "ker",
    kind: CompletionItemKind.Function,
    documentation: "is ker (math mode)."
  },
  {
    label: "\\kill",
    insertText: "kill",
    kind: CompletionItemKind.Function,
    documentation: "|i na\\tabbing environment, deletes"
  },
  {
    label: "\\lis",
    insertText: "lis",
    kind: CompletionItemKind.Function,
    documentation: "l.\\Lis L."
  },
  {
    label: "\\label",
    insertText: "label{${1:key}}$0",
    kind: CompletionItemKind.Reference,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{text} provides a reference point that is"
  },
  {
    label: "\\labelwidth",
    insertText: "labelwidth",
    kind: CompletionItemKind.Function,
    documentation: "| width of box containing list item"
  },
  {
    label: "\\labelsep",
    insertText: "labelsep",
    kind: CompletionItemKind.Function,
    documentation: "| space between box containing list"
  },
  {
    label: "\\lambda",
    insertText: "lambda",
    kind: CompletionItemKind.Function,
    documentation: "is.\\Lambda is  (math mode)."
  },
  {
    label: "\\land",
    insertText: "land",
    kind: CompletionItemKind.Function,
    documentation: "is^(math mode)."
  },
  {
    label: "\\langle",
    insertText: "langle",
    kind: CompletionItemKind.Function,
    documentation: "ish(math mode)."
  },
  {
    label: "\\large",
    insertText: "large",
    kind: CompletionItemKind.Function,
    documentation: ",\\Large ,a n d\LARGE switch to"
  },
  {
    label: "\\LaTeX",
    insertText: "LaTeX",
    kind: CompletionItemKind.Function,
    documentation: "produces the L ATEX logo."
  },
  {
    label: "\\lbrace",
    insertText: "lbrace",
    kind: CompletionItemKind.Function,
    documentation: "isf(math mode)."
  },
  {
    label: "\\lbrack",
    insertText: "lbrack",
    kind: CompletionItemKind.Function,
    documentation: "is [ (math mode)."
  },
  {
    label: "\\lceil",
    insertText: "lceil",
    kind: CompletionItemKind.Function,
    documentation: "isd(math mode)."
  },
  {
    label: "\\ldots",
    insertText: "ldots",
    kind: CompletionItemKind.Function,
    documentation: "makes three dots at the base of the line:"
  },
  {
    label: "\\leis",
    insertText: "leis",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\leadsto",
    insertText: "leadsto",
    kind: CompletionItemKind.Function,
    documentation: "is;(math mode)."
  },
  {
    label: "\\left",
    insertText: "left",
    kind: CompletionItemKind.Function,
    documentation: "* (where*is a delimiter) must be paired"
  },
  {
    label: "\\leftarrow",
    insertText: "leftarrow",
    kind: CompletionItemKind.Function,
    documentation: "is .\\Leftarrow is((math"
  },
  {
    label: "\\lefteqn",
    insertText: "lefteqn",
    kind: CompletionItemKind.Function,
    documentation: "{formula} is used in the eqnarray"
  },
  {
    label: "\\leftharpoondown",
    insertText: "leftharpoondown",
    kind: CompletionItemKind.Function,
    documentation: "is)(math mode)."
  },
  {
    label: "\\leftharpoonup",
    insertText: "leftharpoonup",
    kind: CompletionItemKind.Function,
    documentation: "is((math mode)."
  },
  {
    label: "\\leftmargin",
    insertText: "leftmargin",
    kind: CompletionItemKind.Function,
    documentation: ",i nlist environment, horizontal"
  },
  {
    label: "\\leq",
    insertText: "leq",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\lfloor",
    insertText: "lfloor",
    kind: CompletionItemKind.Function,
    documentation: "isb(math mode)."
  },
  {
    label: "\\lgis",
    insertText: "lgis",
    kind: CompletionItemKind.Function,
    documentation: "lg (math mode)."
  },
  {
    label: "\\lhd",
    insertText: "lhd",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\lim",
    insertText: "lim",
    kind: CompletionItemKind.Function,
    documentation: "is lim (math mode)."
  },
  {
    label: "\\liminf",
    insertText: "liminf",
    kind: CompletionItemKind.Function,
    documentation: "is lim inf (math mode)."
  },
  {
    label: "\\limsup",
    insertText: "limsup",
    kind: CompletionItemKind.Function,
    documentation: "is lim sup (math mode)."
  },
  {
    label: "\\line",
    insertText: "line",
    kind: CompletionItemKind.Function,
    documentation: "(x,y){len} inpicture environment, in"
  },
  {
    label: "\\put",
    insertText: "put",
    kind: CompletionItemKind.Function,
    documentation: "command, draws line from \\put argument"
  },
  {
    label: "\\linebreak",
    insertText: "linebreak",
    kind: CompletionItemKind.Function,
    documentation: "[n] forces a line to break exactly at"
  },
  {
    label: "\\linethickness",
    insertText: "linethickness",
    kind: CompletionItemKind.Function,
    documentation: "{dimen} sets the thickness for all"
  },
  {
    label: "\\linewidth",
    insertText: "linewidth",
    kind: CompletionItemKind.Function,
    documentation: "is the width of the current line in a"
  },
  {
    label: "\\listoffigures",
    insertText: "listoffigures",
    kind: CompletionItemKind.Function,
    documentation: "begins a list of"
  },
  {
    label: "\\listoftables",
    insertText: "listoftables",
    kind: CompletionItemKind.Function,
    documentation: "begins a list of tables with"
  },
  {
    label: "\\listparindent",
    insertText: "listparindent",
    kind: CompletionItemKind.Function,
    documentation: "| extra indentation added to"
  },
  {
    label: "\\llis",
    insertText: "llis",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\lnis",
    insertText: "lnis",
    kind: CompletionItemKind.Function,
    documentation: "ln (math mode)."
  },
  {
    label: "\\lnot",
    insertText: "lnot",
    kind: CompletionItemKind.Function,
    documentation: "is:(math mode)."
  },
  {
    label: "\\log",
    insertText: "log",
    kind: CompletionItemKind.Function,
    documentation: "is log (math mode)."
  },
  {
    label: "\\longleftarrow",
    insertText: "longleftarrow",
    kind: CompletionItemKind.Function,
    documentation: "is −.\\Longleftarrow is(="
  },
  {
    label: "\\longleftrightarrow",
    insertText: "longleftrightarrow",
    kind: CompletionItemKind.Function,
    documentation: "is !."
  },
  {
    label: "\\Longleftrightarrow",
    insertText: "Longleftrightarrow",
    kind: CompletionItemKind.Function,
    documentation: "is() (math mode)."
  },
  {
    label: "\\longmapsto",
    insertText: "longmapsto",
    kind: CompletionItemKind.Function,
    documentation: "is7−!(math mode)."
  },
  {
    label: "\\longrightarrow",
    insertText: "longrightarrow",
    kind: CompletionItemKind.Function,
    documentation: "is−!.\\Longrightarrow is"
  },
  {
    label: "\\lor",
    insertText: "lor",
    kind: CompletionItemKind.Function,
    documentation: "is_(math mode)."
  },
  {
    label: "\\lqis",
    insertText: "lqis",
    kind: CompletionItemKind.Function,
    documentation: "a left-quote: ‘."
  },
  {
    label: "\\makebox",
    insertText: "makebox",
    kind: CompletionItemKind.Function,
    documentation: "[size][pos]{text} creates a box of"
  },
  {
    label: "\\makeglossary",
    insertText: "makeglossary",
    kind: CompletionItemKind.Function,
    documentation: "enables writing of"
  },
  {
    label: "\\glossaryentry",
    insertText: "glossaryentry",
    kind: CompletionItemKind.Function,
    documentation: "commands to a .glo"
  },
  {
    label: "\\makeindex",
    insertText: "makeindex",
    kind: CompletionItemKind.Function,
    documentation: "enables writing of \\indexentry"
  },
  {
    label: "\\maketitle",
    insertText: "maketitle",
    kind: CompletionItemKind.Function,
    documentation: "produces a title with \\title ,"
  },
  {
    label: "\\author",
    insertText: "author",
    kind: CompletionItemKind.Function,
    documentation: ", and, optionally, \\date ."
  },
  {
    label: "\\mapsto",
    insertText: "mapsto",
    kind: CompletionItemKind.Function,
    documentation: "is7!(math mode)."
  },
  {
    label: "\\marginpar",
    insertText: "marginpar",
    kind: CompletionItemKind.Function,
    documentation: "{text} putstext in the margin as a"
  },
  {
    label: "\\marginparpush",
    insertText: "marginparpush",
    kind: CompletionItemKind.Function,
    documentation: "| minimum amount of vertical"
  },
  {
    label: "\\marginparsep",
    insertText: "marginparsep",
    kind: CompletionItemKind.Function,
    documentation: "| horizontal space between"
  },
  {
    label: "\\marginparwidth",
    insertText: "marginparwidth",
    kind: CompletionItemKind.Function,
    documentation: "| width of a marginal note."
  },
  {
    label: "\\markboth",
    insertText: "markboth",
    kind: CompletionItemKind.Function,
    documentation: "{lhd}{rhd} de"
  },
  {
    label: "\\markright",
    insertText: "markright",
    kind: CompletionItemKind.Function,
    documentation: "{rhd} de"
  },
  {
    label: "\\max",
    insertText: "max",
    kind: CompletionItemKind.Function,
    documentation: "is max (math mode)."
  },
  {
    label: "\\mbox",
    insertText: "mbox",
    kind: CompletionItemKind.Function,
    documentation: "{text} placestext into a horizontal box."
  },
  {
    label: "\\medskip",
    insertText: "medskip",
    kind: CompletionItemKind.Function,
    documentation: "| standard \\medium vertical skip."
  },
  {
    label: "\\medskipamount",
    insertText: "medskipamount",
    kind: CompletionItemKind.Function,
    documentation: "| default length for \\medskip ."
  },
  {
    label: "\\mho",
    insertText: "mho",
    kind: CompletionItemKind.Function,
    documentation: "is0(math mode)."
  },
  {
    label: "\\mid",
    insertText: "mid",
    kind: CompletionItemKind.Function,
    documentation: "isj(math mode)."
  },
  {
    label: "\\min",
    insertText: "min",
    kind: CompletionItemKind.Function,
    documentation: "is min (math mode)."
  },
  {
    label: "\\mit",
    insertText: "mit",
    kind: CompletionItemKind.Function,
    documentation: "is \\math italic as in (math mode)."
  },
  {
    label: "\\models",
    insertText: "models",
    kind: CompletionItemKind.Function,
    documentation: "isj= (math mode)."
  },
  {
    label: "\\month",
    insertText: "month",
    kind: CompletionItemKind.Function,
    documentation: "| current month of the year."
  },
  {
    label: "\\mpis",
    insertText: "mpis",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\muis",
    insertText: "muis",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\multicolumn",
    insertText: "multicolumn",
    kind: CompletionItemKind.Function,
    documentation: "{noc}{fmt}{text} intabular"
  },
  {
    label: "\\multiput",
    insertText: "multiput",
    kind: CompletionItemKind.Function,
    documentation: "( x;y)(x;y){n}{obj} is"
  },
  {
    label: "\\put",
    insertText: "put",
    kind: CompletionItemKind.Function,
    documentation: "(x;y){obj}"
  },
  {
    label: "\\put",
    insertText: "put",
    kind: CompletionItemKind.Function,
    documentation: "(x+x;y+y){obj}"
  },
  {
    label: "\\put",
    insertText: "put",
    kind: CompletionItemKind.Function,
    documentation: "(x+(n−1)x;y+(n−1)y){obj} ."
  },
  {
    label: "\\nabla",
    insertText: "nabla",
    kind: CompletionItemKind.Function,
    documentation: "isr(math mode)."
  },
  {
    label: "\\natural",
    insertText: "natural",
    kind: CompletionItemKind.Function,
    documentation: "is\\(math mode)."
  },
  {
    label: "\\neis",
    insertText: "neis",
    kind: CompletionItemKind.Function,
    documentation: "6= (math mode)."
  },
  {
    label: "\\nearrow",
    insertText: "nearrow",
    kind: CompletionItemKind.Function,
    documentation: "is%(math mode)."
  },
  {
    label: "\\neg",
    insertText: "neg",
    kind: CompletionItemKind.Function,
    documentation: "is:(math mode)."
  },
  {
    label: "\\neq",
    insertText: "neq",
    kind: CompletionItemKind.Function,
    documentation: "is6= (math mode)."
  },
  {
    label: "\\newcommand",
    insertText: "newcommand",
    kind: CompletionItemKind.Function,
    documentation: "{\\cs}[narg]{def} de"
  },
  {
    label: "\\newenvironment",
    insertText: "newenvironment",
    kind: CompletionItemKind.Function,
    documentation: "{envname}[narg]{def1}{def2}"
  },
  {
    label: "\\newfont",
    insertText: "newfont",
    kind: CompletionItemKind.Function,
    documentation: "{cs}{name} de"
  },
  {
    label: "\\csthat",
    insertText: "csthat",
    kind: CompletionItemKind.Function,
    documentation: "chooses the font name ."
  },
  {
    label: "\\newlength",
    insertText: "newlength",
    kind: CompletionItemKind.Function,
    documentation: "{\\nl} sets up\nlas a length of 0in."
  },
  {
    label: "\\settowidth",
    insertText: "settowidth",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\newline",
    insertText: "newline",
    kind: CompletionItemKind.Function,
    documentation: "breaks a line right where it is, with no"
  },
  {
    label: "\\newpage",
    insertText: "newpage",
    kind: CompletionItemKind.Function,
    documentation: "ends a page where it appears. (cf."
  },
  {
    label: "\\clearpage",
    insertText: "clearpage",
    kind: CompletionItemKind.Function,
    documentation: ")."
  },
  {
    label: "\\newsavebox",
    insertText: "newsavebox",
    kind: CompletionItemKind.Function,
    documentation: "{\\binname} declares a new binto"
  },
  {
    label: "\\newtheorem",
    insertText: "newtheorem",
    kind: CompletionItemKind.Function,
    documentation: "{env}[env2]{label}[sectyp]"
  },
  {
    label: "\\niis",
    insertText: "niis",
    kind: CompletionItemKind.Function,
    documentation: "3(math mode)."
  },
  {
    label: "\\nofiles",
    insertText: "nofiles",
    kind: CompletionItemKind.Function,
    documentation: "suppresses writing of auxiliary"
  },
  {
    label: "\\noindent",
    insertText: "noindent",
    kind: CompletionItemKind.Function,
    documentation: "suppresses indentation of"
  },
  {
    label: "\\nolinebreak",
    insertText: "nolinebreak",
    kind: CompletionItemKind.Function,
    documentation: "[n] prevents a line break at that"
  },
  {
    label: "\\nonumber",
    insertText: "nonumber",
    kind: CompletionItemKind.Function,
    documentation: "is used in an eqnarray environment to"
  },
  {
    label: "\\nopagebreak",
    insertText: "nopagebreak",
    kind: CompletionItemKind.Function,
    documentation: "[n] prevents a page break at that"
  },
  {
    label: "\\normalmarginpar",
    insertText: "normalmarginpar",
    kind: CompletionItemKind.Function,
    documentation: "is default declaration for"
  },
  {
    label: "\\normalsize",
    insertText: "normalsize",
    kind: CompletionItemKind.Function,
    documentation: "is the default type size for the"
  },
  {
    label: "\\not",
    insertText: "not",
    kind: CompletionItemKind.Function,
    documentation: "puts a slash through a relational operator:"
  },
  {
    label: "\\not",
    insertText: "not",
    kind: CompletionItemKind.Function,
    documentation: "= is6= (math mode)."
  },
  {
    label: "\\notin",
    insertText: "notin",
    kind: CompletionItemKind.Function,
    documentation: "is=2(math mode)."
  },
  {
    label: "\\nuis",
    insertText: "nuis",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\nwarrow",
    insertText: "nwarrow",
    kind: CompletionItemKind.Function,
    documentation: "is-(math mode)."
  },
  {
    label: "\\ois",
    insertText: "ois",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\obeycr",
    insertText: "obeycr",
    kind: CompletionItemKind.Function,
    documentation: "makes embedded carriage returns act"
  },
  {
    label: "\\oddsidemargin",
    insertText: "oddsidemargin",
    kind: CompletionItemKind.Function,
    documentation: "| distance between left side of"
  },
  {
    label: "\\odot",
    insertText: "odot",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\oeis",
    insertText: "oeis",
    kind: CompletionItemKind.Function,
    documentation: ".\\OEis"
  },
  {
    label: "\\oint",
    insertText: "oint",
    kind: CompletionItemKind.Function,
    documentation: "isH"
  },
  {
    label: "\\omega",
    insertText: "omega",
    kind: CompletionItemKind.Function,
    documentation: "is!.\\Omega is Ω (math mode)."
  },
  {
    label: "\\ominus",
    insertText: "ominus",
    kind: CompletionItemKind.Function,
    documentation: "is/circleminus(math mode)."
  },
  {
    label: "\\onecolumn",
    insertText: "onecolumn",
    kind: CompletionItemKind.Function,
    documentation: "sets text in single column (default)"
  },
  {
    label: "\\opening",
    insertText: "opening",
    kind: CompletionItemKind.Function,
    documentation: "{text} declares an opening for letter"
  },
  {
    label: "\\oplus",
    insertText: "oplus",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\oslash",
    insertText: "oslash",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\otimes",
    insertText: "otimes",
    kind: CompletionItemKind.Function,
    documentation: "is⊗(math mode)."
  },
  {
    label: "\\oval",
    insertText: "oval",
    kind: CompletionItemKind.Function,
    documentation: "(x,y) as an argument to \\put draws an"
  },
  {
    label: "\\overbrace",
    insertText: "overbrace",
    kind: CompletionItemKind.Function,
    documentation: "{text} givesz}|{"
  },
  {
    label: "\\overline",
    insertText: "overline",
    kind: CompletionItemKind.Function,
    documentation: "{text} givestext (math mode)."
  },
  {
    label: "\\owns",
    insertText: "owns",
    kind: CompletionItemKind.Function,
    documentation: "is3(math mode)."
  },
  {
    label: "\\Pis",
    insertText: "Pis",
    kind: CompletionItemKind.Function,
    documentation: "{."
  },
  {
    label: "\\pagebreak",
    insertText: "pagebreak",
    kind: CompletionItemKind.Function,
    documentation: "[n] forces a page break at that point"
  },
  {
    label: "\\pagenumbering",
    insertText: "pagenumbering",
    kind: CompletionItemKind.Function,
    documentation: "{style} determines page"
  },
  {
    label: "\\pageref",
    insertText: "pageref",
    kind: CompletionItemKind.Function,
    documentation: "{text} is the page number on which"
  },
  {
    label: "\\label",
    insertText: "label{${1:key}}$0",
    kind: CompletionItemKind.Reference,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{text} occurs."
  },
  {
    label: "\\pagestyle",
    insertText: "pagestyle",
    kind: CompletionItemKind.Function,
    documentation: "{sty} determines characteristics of a"
  },
  {
    label: "\\paragraph",
    insertText: "paragraph{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[toctitle]{text} begins a new"
  },
  {
    label: "\\paragraph",
    insertText: "paragraph{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "*{text} begins a paragraph and"
  },
  {
    label: "\\parallel",
    insertText: "parallel",
    kind: CompletionItemKind.Function,
    documentation: "isk(math mode)."
  },
  {
    label: "\\parbox",
    insertText: "parbox",
    kind: CompletionItemKind.Function,
    documentation: "[pos]{size}{text} is a box created in"
  },
  {
    label: "\\parindent",
    insertText: "parindent",
    kind: CompletionItemKind.Function,
    documentation: "| horizontal indentation added at"
  },
  {
    label: "\\parsep",
    insertText: "parsep",
    kind: CompletionItemKind.Function,
    documentation: "| extra vertical space between"
  },
  {
    label: "\\part",
    insertText: "part{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[toctitle]{text} begins a new part,"
  },
  {
    label: "\\part",
    insertText: "part{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "*{text} begins a part and prints a title,"
  },
  {
    label: "\\partial",
    insertText: "partial",
    kind: CompletionItemKind.Function,
    documentation: "is@(math mode)."
  },
  {
    label: "\\partopsep",
    insertText: "partopsep",
    kind: CompletionItemKind.Function,
    documentation: "| extra vertical space added before"
  },
  {
    label: "\\perp",
    insertText: "perp",
    kind: CompletionItemKind.Function,
    documentation: "is?(math mode)."
  },
  {
    label: "\\phi",
    insertText: "phi",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\piis",
    insertText: "piis",
    kind: CompletionItemKind.Function,
    documentation: ".\\Piis  (math mode)."
  },
  {
    label: "\\pmis",
    insertText: "pmis",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\pmod",
    insertText: "pmod",
    kind: CompletionItemKind.Function,
    documentation: "{modulus} is \\parenthesized modulo"
  },
  {
    label: "\\poptabs",
    insertText: "poptabs",
    kind: CompletionItemKind.Function,
    documentation: "undoes the previous \\pushtabs"
  },
  {
    label: "\\pounds",
    insertText: "pounds",
    kind: CompletionItemKind.Function,
    documentation: "is\\$."
  },
  {
    label: "\\Pris",
    insertText: "Pris",
    kind: CompletionItemKind.Function,
    documentation: "Pr (math mode)."
  },
  {
    label: "\\prec",
    insertText: "prec",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\preceq",
    insertText: "preceq",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\prime",
    insertText: "prime",
    kind: CompletionItemKind.Function,
    documentation: "is0(math mode)."
  },
  {
    label: "\\prod",
    insertText: "prod",
    kind: CompletionItemKind.Function,
    documentation: "isQ(math mode)."
  },
  {
    label: "\\propto",
    insertText: "propto",
    kind: CompletionItemKind.Function,
    documentation: "is/(math mode)."
  },
  {
    label: "\\protect",
    insertText: "protect",
    kind: CompletionItemKind.Function,
    documentation: "permits the use of \\dangerous"
  },
  {
    label: "\\psinletter",
    insertText: "psinletter",
    kind: CompletionItemKind.Function,
    documentation: "document style permits additional"
  },
  {
    label: "\\psi",
    insertText: "psi",
    kind: CompletionItemKind.Function,
    documentation: "is .\\Psi is Ψ (math mode)."
  },
  {
    label: "\\pushtabs",
    insertText: "pushtabs",
    kind: CompletionItemKind.Function,
    documentation: "intabbing environment lets you stack"
  },
  {
    label: "\\put",
    insertText: "put",
    kind: CompletionItemKind.Function,
    documentation: "(x,y){stuff} is the basic picture-drawing"
  },
  {
    label: "\\raggedbottom",
    insertText: "raggedbottom",
    kind: CompletionItemKind.Function,
    documentation: "causes pages to assume natural"
  },
  {
    label: "\\raggedleft",
    insertText: "raggedleft",
    kind: CompletionItemKind.Function,
    documentation: "declares all text that follows is to be"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{flushright} )."
  },
  {
    label: "\\raggedright",
    insertText: "raggedright",
    kind: CompletionItemKind.Function,
    documentation: "declares all text that follows is to"
  },
  {
    label: "\\begin",
    insertText: "begin{${1:environment}}$0",
    kind: CompletionItemKind.Snippet,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{flushleft} )."
  },
  {
    label: "\\raisebox",
    insertText: "raisebox",
    kind: CompletionItemKind.Function,
    documentation: "{dim}[d2][d3]{text} movestext up"
  },
  {
    label: "\\rangle",
    insertText: "rangle",
    kind: CompletionItemKind.Function,
    documentation: "isi(math mode)."
  },
  {
    label: "\\rbrace",
    insertText: "rbrace",
    kind: CompletionItemKind.Function,
    documentation: "isg(math mode)."
  },
  {
    label: "\\rbrack",
    insertText: "rbrack",
    kind: CompletionItemKind.Function,
    documentation: "is ] (math mode)."
  },
  {
    label: "\\rceil",
    insertText: "rceil",
    kind: CompletionItemKind.Function,
    documentation: "ise(math mode)."
  },
  {
    label: "\\Reis",
    insertText: "Reis",
    kind: CompletionItemKind.Function,
    documentation: "<(math mode)."
  },
  {
    label: "\\ref",
    insertText: "ref{${1:key}}$0",
    kind: CompletionItemKind.Reference,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{text} is the section number in which"
  },
  {
    label: "\\label",
    insertText: "label{${1:key}}$0",
    kind: CompletionItemKind.Reference,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{text} occurs."
  },
  {
    label: "\\renewcommand",
    insertText: "renewcommand",
    kind: CompletionItemKind.Function,
    documentation: "{\\cs}[narg]{def} rede"
  },
  {
    label: "\\renewenvironment",
    insertText: "renewenvironment",
    kind: CompletionItemKind.Function,
    documentation: "{envname}[narg]{def1}{def2}"
  },
  {
    label: "\\newenvironment",
    insertText: "newenvironment",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\restorecr",
    insertText: "restorecr",
    kind: CompletionItemKind.Function,
    documentation: "undoes the \\obeycr command"
  },
  {
    label: "\\reversemarginpar",
    insertText: "reversemarginpar",
    kind: CompletionItemKind.Function,
    documentation: "causes opposite margin to be"
  },
  {
    label: "\\rfloor",
    insertText: "rfloor",
    kind: CompletionItemKind.Function,
    documentation: "isc(math mode)."
  },
  {
    label: "\\rhd",
    insertText: "rhd",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\rho",
    insertText: "rho",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\right",
    insertText: "right",
    kind: CompletionItemKind.Function,
    documentation: "* (where*is a delimiter) must be paired"
  },
  {
    label: "\\rightarrow",
    insertText: "rightarrow",
    kind: CompletionItemKind.Function,
    documentation: "is!.\\Rightarrow is)(math"
  },
  {
    label: "\\rightharpoondown",
    insertText: "rightharpoondown",
    kind: CompletionItemKind.Function,
    documentation: "is+(math mode)."
  },
  {
    label: "\\rightharpoonup",
    insertText: "rightharpoonup",
    kind: CompletionItemKind.Function,
    documentation: "is*(math mode)."
  },
  {
    label: "\\rightleftharpoons",
    insertText: "rightleftharpoons",
    kind: CompletionItemKind.Function,
    documentation: "is*)(math mode)."
  },
  {
    label: "\\rightmargin",
    insertText: "rightmargin",
    kind: CompletionItemKind.Function,
    documentation: "|i nlist environment, horizontal"
  },
  {
    label: "\\rmswitches",
    insertText: "rmswitches",
    kind: CompletionItemKind.Function,
    documentation: "to Roman type."
  },
  {
    label: "\\roman",
    insertText: "roman",
    kind: CompletionItemKind.Function,
    documentation: "{counter} printscounter in lower-case"
  },
  {
    label: "\\rqis",
    insertText: "rqis",
    kind: CompletionItemKind.Function,
    documentation: "a right-quote: ’.\\rule[height]{length}{width} makes a"
  },
  {
    label: "\\Sisx",
    insertText: "Sisx",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\savebox",
    insertText: "savebox",
    kind: CompletionItemKind.Function,
    documentation: "{\\binname}[width][pos]{text} is"
  },
  {
    label: "\\usebox",
    insertText: "usebox",
    kind: CompletionItemKind.Function,
    documentation: "{\\binname} ."
  },
  {
    label: "\\sbox",
    insertText: "sbox",
    kind: CompletionItemKind.Function,
    documentation: "{\\binname}{text} savestext in box"
  },
  {
    label: "\\binname",
    insertText: "binname",
    kind: CompletionItemKind.Function,
    documentation: "(see\\savebox ,a b o v e ) ."
  },
  {
    label: "\\scswitches",
    insertText: "scswitches",
    kind: CompletionItemKind.Function,
    documentation: "to caps and small caps font."
  },
  {
    label: "\\scriptsize",
    insertText: "scriptsize",
    kind: CompletionItemKind.Function,
    documentation: "switches subscript size type."
  },
  {
    label: "\\scriptstyle",
    insertText: "scriptstyle",
    kind: CompletionItemKind.Function,
    documentation: "switches to sub- or"
  },
  {
    label: "\\scriptscriptstyle",
    insertText: "scriptscriptstyle",
    kind: CompletionItemKind.Function,
    documentation: "switches to second-level"
  },
  {
    label: "\\searrow",
    insertText: "searrow",
    kind: CompletionItemKind.Function,
    documentation: "is&(math mode)."
  },
  {
    label: "\\sec",
    insertText: "sec",
    kind: CompletionItemKind.Function,
    documentation: "is sec (math mode)."
  },
  {
    label: "\\section",
    insertText: "section{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[toctitle]{text} begins a new"
  },
  {
    label: "\\section",
    insertText: "section{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "*{text} begins a section, prints a title,"
  },
  {
    label: "\\setcounter",
    insertText: "setcounter",
    kind: CompletionItemKind.Function,
    documentation: "{counter}{value} resets the value"
  },
  {
    label: "\\setlength",
    insertText: "setlength",
    kind: CompletionItemKind.Function,
    documentation: "{\\nl}{length} sets value of length"
  },
  {
    label: "\\addtolength",
    insertText: "addtolength",
    kind: CompletionItemKind.Function,
    documentation: ",\\newlength ,\settowidth ."
  },
  {
    label: "\\setminus",
    insertText: "setminus",
    kind: CompletionItemKind.Function,
    documentation: "isn(math mode)."
  },
  {
    label: "\\settowidth",
    insertText: "settowidth",
    kind: CompletionItemKind.Function,
    documentation: "{\\nl}{text} sets value of length"
  },
  {
    label: "\\setlength",
    insertText: "setlength",
    kind: CompletionItemKind.Function,
    documentation: ",\\newlength ,\addtolength ."
  },
  {
    label: "\\sfswitches",
    insertText: "sfswitches",
    kind: CompletionItemKind.Function,
    documentation: "to sans serif font."
  },
  {
    label: "\\sharp",
    insertText: "sharp",
    kind: CompletionItemKind.Function,
    documentation: "is](math mode)."
  },
  {
    label: "\\shortstack",
    insertText: "shortstack",
    kind: CompletionItemKind.Function,
    documentation: "[pos]{x\\yy\\zzz} yieldsxyy"
  },
  {
    label: "\\sigma",
    insertText: "sigma",
    kind: CompletionItemKind.Function,
    documentation: "is.\\Sigma is  (math mode)."
  },
  {
    label: "\\signature",
    insertText: "signature",
    kind: CompletionItemKind.Function,
    documentation: "{text} declares a signature for"
  },
  {
    label: "\\sim",
    insertText: "sim",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\simeq",
    insertText: "simeq",
    kind: CompletionItemKind.Function,
    documentation: "is’(math mode)."
  },
  {
    label: "\\sin",
    insertText: "sin",
    kind: CompletionItemKind.Function,
    documentation: "is sin (math mode)."
  },
  {
    label: "\\sinh",
    insertText: "sinh",
    kind: CompletionItemKind.Function,
    documentation: "is sinh (math mode)."
  },
  {
    label: "\\slswitches",
    insertText: "slswitches",
    kind: CompletionItemKind.Function,
    documentation: "to slanted typeface."
  },
  {
    label: "\\sloppy",
    insertText: "sloppy",
    kind: CompletionItemKind.Function,
    documentation: "relaxes the line-breaking algorithm to"
  },
  {
    label: "\\small",
    insertText: "small",
    kind: CompletionItemKind.Function,
    documentation: "switches to smaller than normalsize"
  },
  {
    label: "\\smallint",
    insertText: "smallint",
    kind: CompletionItemKind.Function,
    documentation: "iss(math mode)."
  },
  {
    label: "\\smallskip",
    insertText: "smallskip",
    kind: CompletionItemKind.Function,
    documentation: "| standard \\small vertical skip."
  },
  {
    label: "\\smallskipamount",
    insertText: "smallskipamount",
    kind: CompletionItemKind.Function,
    documentation: "| default length for"
  },
  {
    label: "\\smallskip",
    insertText: "smallskip",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\smile",
    insertText: "smile",
    kind: CompletionItemKind.Function,
    documentation: "is^(math mode)."
  },
  {
    label: "\\spadesuit",
    insertText: "spadesuit",
    kind: CompletionItemKind.Function,
    documentation: "is♠(math mode)."
  },
  {
    label: "\\sqcap",
    insertText: "sqcap",
    kind: CompletionItemKind.Function,
    documentation: "isu(math mode)."
  },
  {
    label: "\\sqcup",
    insertText: "sqcup",
    kind: CompletionItemKind.Function,
    documentation: "ist(math mode)."
  },
  {
    label: "\\sqrt",
    insertText: "sqrt",
    kind: CompletionItemKind.Function,
    documentation: "[3]{arg} is3parg.3(root) is optional."
  },
  {
    label: "\\sqsubset",
    insertText: "sqsubset",
    kind: CompletionItemKind.Function,
    documentation: "is<(math mode)."
  },
  {
    label: "\\sqsubseteq",
    insertText: "sqsubseteq",
    kind: CompletionItemKind.Function,
    documentation: "isv(math mode)."
  },
  {
    label: "\\sqsupset",
    insertText: "sqsupset",
    kind: CompletionItemKind.Function,
    documentation: "is=(math mode)."
  },
  {
    label: "\\sqsupseteq",
    insertText: "sqsupseteq",
    kind: CompletionItemKind.Function,
    documentation: "isw(math mode)."
  },
  {
    label: "\\ssis",
    insertText: "ssis",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\stackrel",
    insertText: "stackrel",
    kind: CompletionItemKind.Function,
    documentation: "{stuff}{delim} putsstuff above the"
  },
  {
    label: "\\star",
    insertText: "star",
    kind: CompletionItemKind.Function,
    documentation: "is?(math mode)."
  },
  {
    label: "\\stop",
    insertText: "stop",
    kind: CompletionItemKind.Function,
    documentation: "|t y p et h i si fT EX stops with a *and no"
  },
  {
    label: "\\subparagraph",
    insertText: "subparagraph",
    kind: CompletionItemKind.Function,
    documentation: "[toctitle]{text} begins a"
  },
  {
    label: "\\subparagraph",
    insertText: "subparagraph",
    kind: CompletionItemKind.Function,
    documentation: "*{text} begins a subparagraph"
  },
  {
    label: "\\subsection",
    insertText: "subsection{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[toctitle]{text} ,"
  },
  {
    label: "\\subsubsection",
    insertText: "subsubsection{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "[toctitle]{text} begin new"
  },
  {
    label: "\\subsection",
    insertText: "subsection{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "*{text} ,\\subsubsection*{text}"
  },
  {
    label: "\\subset",
    insertText: "subset",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\subseteq",
    insertText: "subseteq",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\succ",
    insertText: "succ",
    kind: CompletionItemKind.Function,
    documentation: "is (math mode)."
  },
  {
    label: "\\succeq",
    insertText: "succeq",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\sum",
    insertText: "sum",
    kind: CompletionItemKind.Function,
    documentation: "isP(math mode)."
  },
  {
    label: "\\sup",
    insertText: "sup",
    kind: CompletionItemKind.Function,
    documentation: "is sup (math mode)."
  },
  {
    label: "\\supset",
    insertText: "supset",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode).\\supseteq is(math mode)."
  },
  {
    label: "\\surd",
    insertText: "surd",
    kind: CompletionItemKind.Function,
    documentation: "isp(math mode)."
  },
  {
    label: "\\swarrow",
    insertText: "swarrow",
    kind: CompletionItemKind.Function,
    documentation: "is.(math mode)."
  },
  {
    label: "\\symbol",
    insertText: "symbol",
    kind: CompletionItemKind.Function,
    documentation: "{cc} produces the symbol (glyph)"
  },
  {
    label: "\\tprints",
    insertText: "tprints",
    kind: CompletionItemKind.Function,
    documentation: "a \\tie-after accent, as /tieoo."
  },
  {
    label: "\\tabbingsep",
    insertText: "tabbingsep",
    kind: CompletionItemKind.Function,
    documentation: "| distance to left of a tab stop"
  },
  {
    label: "\\tabcolsep",
    insertText: "tabcolsep",
    kind: CompletionItemKind.Function,
    documentation: "| half the width of the space"
  },
  {
    label: "\\tableofcontents",
    insertText: "tableofcontents",
    kind: CompletionItemKind.Function,
    documentation: "produces a table of contents."
  },
  {
    label: "\\tan",
    insertText: "tan",
    kind: CompletionItemKind.Function,
    documentation: "is tan (math mode)."
  },
  {
    label: "\\tanh",
    insertText: "tanh",
    kind: CompletionItemKind.Function,
    documentation: "is tanh (math mode)."
  },
  {
    label: "\\tau",
    insertText: "tau",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\TeX",
    insertText: "TeX",
    kind: CompletionItemKind.Function,
    documentation: "produces the T EX logo."
  },
  {
    label: "\\textfloatsep",
    insertText: "textfloatsep",
    kind: CompletionItemKind.Function,
    documentation: "| distance between ﬂoats at the"
  },
  {
    label: "\\textfraction",
    insertText: "textfraction",
    kind: CompletionItemKind.Function,
    documentation: "| minimum fraction of a text"
  },
  {
    label: "\\textheight",
    insertText: "textheight",
    kind: CompletionItemKind.Function,
    documentation: "is the normal vertical dimension of"
  },
  {
    label: "\\textstyle",
    insertText: "textstyle",
    kind: CompletionItemKind.Function,
    documentation: "switches to math environment"
  },
  {
    label: "\\textwidth",
    insertText: "textwidth",
    kind: CompletionItemKind.Function,
    documentation: "is the normal horizontal dimension of"
  },
  {
    label: "\\thanks",
    insertText: "thanks",
    kind: CompletionItemKind.Function,
    documentation: "{footnote} adds an acknowledgement"
  },
  {
    label: "\\maketitle",
    insertText: "maketitle",
    kind: CompletionItemKind.Function,
    documentation: "command."
  },
  {
    label: "\\theta",
    insertText: "theta",
    kind: CompletionItemKind.Function,
    documentation: "is.\\Theta is  (math mode)."
  },
  {
    label: "\\thicklines",
    insertText: "thicklines",
    kind: CompletionItemKind.Function,
    documentation: "is an alternate line thickness for"
  },
  {
    label: "\\thinlines",
    insertText: "thinlines",
    kind: CompletionItemKind.Function,
    documentation: "is the default declaration for line"
  },
  {
    label: "\\thicklines",
    insertText: "thicklines",
    kind: CompletionItemKind.Function,
    documentation: "."
  },
  {
    label: "\\thinspace",
    insertText: "thinspace",
    kind: CompletionItemKind.Function,
    documentation: "is the proper space between single"
  },
  {
    label: "\\thispagestyle",
    insertText: "thispagestyle",
    kind: CompletionItemKind.Function,
    documentation: "{sty} determines characteristics"
  },
  {
    label: "\\tilde",
    insertText: "tilde",
    kind: CompletionItemKind.Function,
    documentation: "makes a tilde, as: ~ a(math mode)."
  },
  {
    label: "\\times",
    insertText: "times",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\tiny",
    insertText: "tiny",
    kind: CompletionItemKind.Function,
    documentation: "switches to a very small typeface."
  },
  {
    label: "\\title",
    insertText: "title{${1:title}}$0",
    kind: CompletionItemKind.Function,
    insertTextRules: CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "{text} declares a document title for the"
  },
  {
    label: "\\maketitle",
    insertText: "maketitle",
    kind: CompletionItemKind.Function,
    documentation: "command."
  },
  {
    label: "\\tois",
    insertText: "tois",
    kind: CompletionItemKind.Function,
    documentation: "!(math mode)."
  },
  {
    label: "\\today",
    insertText: "today",
    kind: CompletionItemKind.Function,
    documentation: "generates today’s date."
  },
  {
    label: "\\top",
    insertText: "top",
    kind: CompletionItemKind.Function,
    documentation: "is>(math mode)."
  },
  {
    label: "\\topfraction",
    insertText: "topfraction",
    kind: CompletionItemKind.Function,
    documentation: "| maximum fraction at the top of"
  },
  {
    label: "\\topmargin",
    insertText: "topmargin",
    kind: CompletionItemKind.Function,
    documentation: "| space between top of T EX page (1"
  },
  {
    label: "\\topsep",
    insertText: "topsep",
    kind: CompletionItemKind.Function,
    documentation: "| extra vertical space added before"
  },
  {
    label: "\\topskip",
    insertText: "topskip",
    kind: CompletionItemKind.Function,
    documentation: "| minimum distance between top of"
  },
  {
    label: "\\triangle",
    insertText: "triangle",
    kind: CompletionItemKind.Function,
    documentation: "is4(math mode)."
  },
  {
    label: "\\triangleleft",
    insertText: "triangleleft",
    kind: CompletionItemKind.Function,
    documentation: "is/(math mode)."
  },
  {
    label: "\\triangleright",
    insertText: "triangleright",
    kind: CompletionItemKind.Function,
    documentation: "is.(math mode)."
  },
  {
    label: "\\ttswitches",
    insertText: "ttswitches",
    kind: CompletionItemKind.Function,
    documentation: "to typewriter type."
  },
  {
    label: "\\twocolumn",
    insertText: "twocolumn",
    kind: CompletionItemKind.Function,
    documentation: "[text] declares a two-column page,"
  },
  {
    label: "\\typein",
    insertText: "typein",
    kind: CompletionItemKind.Function,
    documentation: "[\\cs]{text} displaystext on the screen"
  },
  {
    label: "\\typeout",
    insertText: "typeout",
    kind: CompletionItemKind.Function,
    documentation: "{text} displaystext on the screen and"
  },
  {
    label: "\\uprints",
    insertText: "uprints",
    kind: CompletionItemKind.Function,
    documentation: "a breve accent, as  o."
  },
  {
    label: "\\unboldmath",
    insertText: "unboldmath",
    kind: CompletionItemKind.Function,
    documentation: "unemboldens math italics and math"
  },
  {
    label: "\\underbrace",
    insertText: "underbrace",
    kind: CompletionItemKind.Function,
    documentation: "{text} givestext|{z}(math mode)."
  },
  {
    label: "\\underline",
    insertText: "underline",
    kind: CompletionItemKind.Function,
    documentation: "{text} gives text (math mode or"
  },
  {
    label: "\\unitlength",
    insertText: "unitlength",
    kind: CompletionItemKind.Function,
    documentation: "| length of coordinate units for"
  },
  {
    label: "\\unlhd",
    insertText: "unlhd",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\unrhd",
    insertText: "unrhd",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\uparrow",
    insertText: "uparrow",
    kind: CompletionItemKind.Function,
    documentation: "is.\\Uparrow is*(math mode)."
  },
  {
    label: "\\updownarrow",
    insertText: "updownarrow",
    kind: CompletionItemKind.Function,
    documentation: "isl.\\Updownarrow ism(math"
  },
  {
    label: "\\uplus",
    insertText: "uplus",
    kind: CompletionItemKind.Function,
    documentation: "is](math mode)."
  },
  {
    label: "\\upsilon",
    insertText: "upsilon",
    kind: CompletionItemKind.Function,
    documentation: "is"
  },
  {
    label: "\\usebox",
    insertText: "usebox",
    kind: CompletionItemKind.Function,
    documentation: "{\\binname} recalls box de"
  },
  {
    label: "\\usecounter",
    insertText: "usecounter",
    kind: CompletionItemKind.Function,
    documentation: "{counter} is used in a list"
  },
  {
    label: "\\vprints",
    insertText: "vprints",
    kind: CompletionItemKind.Function,
    documentation: "a h acek, as  o."
  },
  {
    label: "\\value",
    insertText: "value",
    kind: CompletionItemKind.Function,
    documentation: "{counter} produces the numeric value of"
  },
  {
    label: "\\varepsilon",
    insertText: "varepsilon",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode).\\varphi is’(math mode)."
  },
  {
    label: "\\varpi",
    insertText: "varpi",
    kind: CompletionItemKind.Function,
    documentation: "is\\$(math mode)."
  },
  {
    label: "\\varrho",
    insertText: "varrho",
    kind: CompletionItemKind.Function,
    documentation: "is%(math mode)."
  },
  {
    label: "\\varsigma",
    insertText: "varsigma",
    kind: CompletionItemKind.Function,
    documentation: "is&(math mode)."
  },
  {
    label: "\\vartheta",
    insertText: "vartheta",
    kind: CompletionItemKind.Function,
    documentation: "is#(math mode)."
  },
  {
    label: "\\vdash",
    insertText: "vdash",
    kind: CompletionItemKind.Function,
    documentation: "is‘(math mode)."
  },
  {
    label: "\\vdots",
    insertText: "vdots",
    kind: CompletionItemKind.Function,
    documentation: "is... (math mode)."
  },
  {
    label: "\\vec",
    insertText: "vec",
    kind: CompletionItemKind.Function,
    documentation: "puts a vector over a letter: ~a(math mode)."
  },
  {
    label: "\\vector",
    insertText: "vector",
    kind: CompletionItemKind.Function,
    documentation: "(x,y){len} inpicture environment, in"
  },
  {
    label: "\\put",
    insertText: "put",
    kind: CompletionItemKind.Function,
    documentation: "command, draws vector from \\put"
  },
  {
    label: "\\vee",
    insertText: "vee",
    kind: CompletionItemKind.Function,
    documentation: "is_(math mode)."
  },
  {
    label: "\\verb",
    insertText: "verb",
    kind: CompletionItemKind.Function,
    documentation: "/text/ creates a local verbatim"
  },
  {
    label: "\\verb",
    insertText: "verb",
    kind: CompletionItemKind.Function,
    documentation: "*/text/ is like\\verb/text/ , but spaces"
  },
  {
    label: "\\vert",
    insertText: "vert",
    kind: CompletionItemKind.Function,
    documentation: "isj.\\Vert isk(math mode)."
  },
  {
    label: "\\vfill",
    insertText: "vfill",
    kind: CompletionItemKind.Function,
    documentation: "is\\vspace{\fill} (cf.\fill )."
  },
  {
    label: "\\vspace",
    insertText: "vspace",
    kind: CompletionItemKind.Function,
    documentation: "{len} leaves a vertical space of"
  },
  {
    label: "\\vspace",
    insertText: "vspace",
    kind: CompletionItemKind.Function,
    documentation: "*{len} is like\\vspace{len} but space is"
  },
  {
    label: "\\wedge",
    insertText: "wedge",
    kind: CompletionItemKind.Function,
    documentation: "is^(math mode)."
  },
  {
    label: "\\widehat",
    insertText: "widehat",
    kind: CompletionItemKind.Function,
    documentation: "{arg} isdarg(math mode)."
  },
  {
    label: "\\widetilde",
    insertText: "widetilde",
    kind: CompletionItemKind.Function,
    documentation: "{arg} isgarg(math mode)."
  },
  {
    label: "\\wpis",
    insertText: "wpis",
    kind: CompletionItemKind.Function,
    documentation: "}(math mode)."
  },
  {
    label: "\\wriso",
    insertText: "wriso",
    kind: CompletionItemKind.Function,
    documentation: "(math mode)."
  },
  {
    label: "\\xiis",
    insertText: "xiis",
    kind: CompletionItemKind.Function,
    documentation: ".\\Xiis  (math mode)."
  },
  {
    label: "\\year",
    insertText: "year",
    kind: CompletionItemKind.Function,
    documentation: "| current year (A.D.)."
  },
  {
    label: "\\zeta",
    insertText: "zeta",
    kind: CompletionItemKind.Function,
    documentation: "is(math mode)."
  },
  {
    label: "\\rm",
    insertText: "rm",
    kind: CompletionItemKind.Function,
    documentation: "Roman"
  },
  {
    label: "\\it",
    insertText: "it",
    kind: CompletionItemKind.Function,
    documentation: "Italic"
  },
  {
    label: "\\bf",
    insertText: "bf",
    kind: CompletionItemKind.Function,
    documentation: "Boldface"
  },
  {
    label: "\\textbf\{\}",
    insertText: "textbf{${1}}$0",
    kind: CompletionItemKind.Function,
    documentation: "Bolded Text"
  },
  {
    label: "\\sl",
    insertText: "sl",
    kind: CompletionItemKind.Function,
    documentation: "Slanted"
  },
  {
    label: "\\sf",
    insertText: "sf",
    kind: CompletionItemKind.Function,
    documentation: "Sans serif"
  },
  {
    label: "\\sc",
    insertText: "sc",
    kind: CompletionItemKind.Function,
    documentation: "Small Caps"
  },
  {
    label: "\\tt",
    insertText: "tt",
    kind: CompletionItemKind.Function,
    documentation: "Typewriter"
  },
  {
    label: "\\OE",
    insertText: "OE",
    kind: CompletionItemKind.Function,
    documentation: "A\\AA L\L"
  },
  {
    label: "\\o",
    insertText: "o",
    kind: CompletionItemKind.Function,
    documentation: "\\ss"
  },
  {
    label: "\\AE",
    insertText: "AE",
    kind: CompletionItemKind.Function,
    documentation: "\\OMiscellaneous symbols"
  },
  {
    label: "\\alpha",
    insertText: "alpha",
    kind: CompletionItemKind.Function,
    documentation: "\\nu"
  },
  {
    label: "\\beta",
    insertText: "beta",
    kind: CompletionItemKind.Function,
    documentation: "\\xi"
  },
  {
    label: "\\tau",
    insertText: "tau",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\upsilon",
    insertText: "upsilon",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\phi",
    insertText: "phi",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\odot",
    insertText: "odot",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\oslash",
    insertText: "oslash",
    kind: CompletionItemKind.Function,
    documentation: "\\unrhd"
  },
  {
    label: "\\prec",
    insertText: "prec",
    kind: CompletionItemKind.Function,
    documentation: "\\succ"
  },
  {
    label: "\\ll",
    insertText: "ll",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\gg",
    insertText: "gg",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\sumT",
    insertText: "sumT",
    kind: CompletionItemKind.Function,
    documentation: "\\"
  },
  {
    label: "\\bigcap",
    insertText: "bigcap",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\prodS",
    insertText: "prodS",
    kind: CompletionItemKind.Function,
    documentation: "["
  },
  {
    label: "\\bigcup",
    insertText: "bigcup",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\coprodFG",
    insertText: "coprodFG",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\bigsqcup",
    insertText: "bigsqcup",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\intW",
    insertText: "intW",
    kind: CompletionItemKind.Function,
    documentation: "_"
  },
  {
    label: "\\bigvee",
    insertText: "bigvee",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\ointV",
    insertText: "ointV",
    kind: CompletionItemKind.Function,
    documentation: "^"
  },
  {
    label: "\\bigwedge",
    insertText: "bigwedge",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\bigodotNO",
    insertText: "bigodotNO",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\bigotimes",
    insertText: "bigotimes",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\bigoplusU",
    insertText: "bigoplusU",
    kind: CompletionItemKind.Function,
    documentation: "]"
  },
  {
    label: "\\biguplus",
    insertText: "biguplus",
    kind: CompletionItemKind.Function,
    documentation: ""
  },
  {
    label: "\\Log",
    insertText: "Log",
    kind: CompletionItemKind.Function,
    documentation: "like functions (math mode)"
  },
  {
    label: "\\arccos",
    insertText: "arccos",
    kind: CompletionItemKind.Function,
    documentation: "\\csc \ker \min"
  },
  {
    label: "\\arcsin",
    insertText: "arcsin",
    kind: CompletionItemKind.Function,
    documentation: "\\deg \lg \Pr"
  },
  {
    label: "\\arctan",
    insertText: "arctan",
    kind: CompletionItemKind.Function,
    documentation: "\\det \lim \sec\arg \dim \liminf \sin"
  },
  {
    label: "\\cos",
    insertText: "cos",
    kind: CompletionItemKind.Function,
    documentation: "\\exp \limsup \sinh"
  },
  {
    label: "\\cosh",
    insertText: "cosh",
    kind: CompletionItemKind.Function,
    documentation: "\\gcd \ln \sup"
  },
  {
    label: "\\cot",
    insertText: "cot",
    kind: CompletionItemKind.Function,
    documentation: "\\hom \log \tan"
  },
  {
    label: "\\coth",
    insertText: "coth",
    kind: CompletionItemKind.Function,
    documentation: "\\inf \max \tanh"
  },
  {
    label: "\\leftarrow",
    insertText: "leftarrow",
    kind: CompletionItemKind.Function,
    documentation: "−\\longleftarrow"
  },
  {
    label: "\\",
    insertText: "",
    kind: CompletionItemKind.Function,
    documentation: "natural♠\\spadesuit"
  },
];

export function toCompletionItem(cmd: RawLatexCommand, model: ITextModel, position: Position): CompletionItem {
  const word = model.getWordUntilPosition(position);
  const range: IRange = {
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
    startColumn: word.startColumn,
    endColumn: word.endColumn
  };
  return {
    label: cmd.label,
    kind: cmd.kind ?? CompletionItemKind.Function,
    insertText: cmd.insertText ?? cmd.label,
    insertTextRules: cmd.insertTextRules ?? CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: cmd.documentation,
    range
  };
}

export function allCompletionItemsForPosition(model: ITextModel, position: Position): CompletionList {
  const suggestions = RAW_LATEX_COMMANDS.map(cmd => toCompletionItem(cmd, model, position));
  return { suggestions };
}
