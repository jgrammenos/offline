/*!
// Copyright (C) 2011 Kitware Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//		http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
*/
(function(){var b="B|BREAK|C|CLOSE|D|DO|E|ELSE|F|FOR|G|GOTO|H|HALT|H|HANG|I|IF|J|JOB|K|KILL|L|LOCK|M|MERGE|N|NEW|O|OPEN|Q|QUIT|R|READ|S|SET|TC|TCOMMIT|TRE|TRESTART|TRO|TROLLBACK|TS|TSTART|U|USE|V|VIEW|W|WRITE|X|XECUTE";var a="D|DEVICE|EC|ECODE|ES|ESTACK|ET|ETRAP|H|HOROLOG|I|IO|J|JOB|K|KEY|P|PRINCIPAL|Q|QUIT|ST|STACK|S|STORAGE|SY|SYSTEM|T|TEST|TL|TLEVEL|TR|TRESTART|X|Y|Z[A-Z]*|";var f="A|ASCII|C|CHAR|D|DATA|E|EXTRACT|F|FIND|FN|FNUMBER|G|GET|J|JUSTIFY|L|LENGTH|NA|NAME|O|ORDER|P|PIECE|QL|QLENGTH|QS|QSUBSCRIPT|Q|QUERY|R|RANDOM|RE|REVERSE|S|SELECT|ST|STACK|T|TEXT|TR|TRANSLATE|V|VIEW|"*"Z[A-Z]*|";var e=a+f;var d=[[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_STRING,/^(?:"(?:[^"]|\\.)*")/,null,'"']];var c=[[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_DECLARATION,new RegExp("^(?:\\$(?:"+e+"))\\b","i"),null],[PR.PR_KEYWORD,new RegExp("^(?:[^\\$]"+b+")\\b","i"),null],[PR.PR_LITERAL,/^[+-]?(?:(?:\.\d+|\d+(?:\.\d*)?)(?:E[+\-]?\d+)?)/i],[PR.PR_PLAIN,/^[a-z][a-zA-Z0-9]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r\xA0\"\$;%\^]|_/]];PR.registerLangHandler(PR.createSimpleLexer(d,c),["mumps"])})();