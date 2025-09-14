LETTER_TEMPLATE = r"""
\documentclass{article}

\usepackage{charter} % Use the Charter font

\usepackage[
	a4paper,    % Paper size
	top=1in,    % Top margin
	bottom=1in, % Bottom margin
	left=1in,   % Left margin
	right=1in,  % Right margin
	%showframe  % Uncomment to show frames around the margins for debugging purposes
]{geometry}

\setlength{\parindent}{0pt}     % Paragraph indentation 
\setlength{\parskip}{1em}       % Vertical space between paragraphs

\usepackage{graphicx}       % Required for including images

\usepackage{fancyhdr}       % Required for customizing headers and footers

\fancypagestyle{firstpage}{%
	\fancyhf{} % Clear default headers/footers
	\renewcommand{\headrulewidth}{0pt} % No header rule
	\renewcommand{\footrulewidth}{1pt} % Footer rule thickness
}

\fancypagestyle{subsequentpages}{%
	\fancyhf{} % Clear default headers/footers
	\renewcommand{\headrulewidth}{1pt} % Header rule thickness
	\renewcommand{\footrulewidth}{1pt} % Footer rule thickness
}

\AtBeginDocument{\thispagestyle{firstpage}} % Use the first page headers/footers style on the first page
\pagestyle{subsequentpages} % Use the subsequent pages headers/footers style on subsequent pages

%----------------------------------------------------------------------------------------

\begin{document}

%----------------------------------------------------------------------------------------
%	FIRST PAGE HEADER
%----------------------------------------------------------------------------------------

\includegraphics[width=0.5\textwidth]{logo.eps} % Logo

\vspace{-1em} % Pull the rule closer to the logo

\rule{\linewidth}{1pt} % Horizontal rule

\bigskip\bigskip % Vertical whitespace

%----------------------------------------------------------------------------------------
%	YOUR NAME AND CONTACT INFORMATION
%----------------------------------------------------------------------------------------

\hfill
\begin{tabular}{l @{}}
	\today \bigskip\\ % Date
	Your Name \\
	Your Address Line 1 \\ % Address
	Your Address Line 2 \\
	Phone: +1 (555) 123-4567 \\
	Email: your.email@example.com
\end{tabular}

\bigskip % Vertical whitespace

%----------------------------------------------------------------------------------------
%	ADDRESSEE AND GREETING
%----------------------------------------------------------------------------------------

\begin{tabular}{@{} l}
	Mr.\ Recipient Name \\
	Recruitment Officer \\
	Company Name \\
	123 Business Street \\
	City, State 12345
\end{tabular}

\bigskip % Vertical whitespace

Dear Mr.\ Recipient Name,

\bigskip % Vertical whitespace

%----------------------------------------------------------------------------------------
%	LETTER CONTENT
%----------------------------------------------------------------------------------------

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

\bigskip % Vertical whitespace

Sincerely yours,

\includegraphics[height = 1cm]{signature_block.pdf}

\vspace{25pt} % Vertical whitespace

Your Name

\end{document}
"""