// This file can't be parsed by JSDuck due to <https://github.com/tenderlove/rkelly/issues/35>.
// (It is excluded in jsduck.json.)
// ESLint suggests unquoting some object keys, which would render the file unparseable by Opera 12.
/* eslint-disable quote-props */
( function ( mw ) {
	var toUpperMapping = {
		'ß': 'ß',
		'ŉ': 'ŉ',
		'ǅ': 'ǅ',
		'ǆ': 'ǅ',
		'ǈ': 'ǈ',
		'ǉ': 'ǈ',
		'ǋ': 'ǋ',
		'ǌ': 'ǋ',
		'ǰ': 'ǰ',
		'ǲ': 'ǲ',
		'ǳ': 'ǲ',
		'ʝ': 'Ʝ',
		'ͅ': 'ͅ',
		'ΐ': 'ΐ',
		'ΰ': 'ΰ',
		'և': 'և',
		'ᏸ': 'Ᏸ',
		'ᏹ': 'Ᏹ',
		'ᏺ': 'Ᏺ',
		'ᏻ': 'Ᏻ',
		'ᏼ': 'Ᏼ',
		'ᏽ': 'Ᏽ',
		'ẖ': 'ẖ',
		'ẗ': 'ẗ',
		'ẘ': 'ẘ',
		'ẙ': 'ẙ',
		'ẚ': 'ẚ',
		'ὐ': 'ὐ',
		'ὒ': 'ὒ',
		'ὔ': 'ὔ',
		'ὖ': 'ὖ',
		'ᾀ': 'ᾈ',
		'ᾁ': 'ᾉ',
		'ᾂ': 'ᾊ',
		'ᾃ': 'ᾋ',
		'ᾄ': 'ᾌ',
		'ᾅ': 'ᾍ',
		'ᾆ': 'ᾎ',
		'ᾇ': 'ᾏ',
		'ᾈ': 'ᾈ',
		'ᾉ': 'ᾉ',
		'ᾊ': 'ᾊ',
		'ᾋ': 'ᾋ',
		'ᾌ': 'ᾌ',
		'ᾍ': 'ᾍ',
		'ᾎ': 'ᾎ',
		'ᾏ': 'ᾏ',
		'ᾐ': 'ᾘ',
		'ᾑ': 'ᾙ',
		'ᾒ': 'ᾚ',
		'ᾓ': 'ᾛ',
		'ᾔ': 'ᾜ',
		'ᾕ': 'ᾝ',
		'ᾖ': 'ᾞ',
		'ᾗ': 'ᾟ',
		'ᾘ': 'ᾘ',
		'ᾙ': 'ᾙ',
		'ᾚ': 'ᾚ',
		'ᾛ': 'ᾛ',
		'ᾜ': 'ᾜ',
		'ᾝ': 'ᾝ',
		'ᾞ': 'ᾞ',
		'ᾟ': 'ᾟ',
		'ᾠ': 'ᾨ',
		'ᾡ': 'ᾩ',
		'ᾢ': 'ᾪ',
		'ᾣ': 'ᾫ',
		'ᾤ': 'ᾬ',
		'ᾥ': 'ᾭ',
		'ᾦ': 'ᾮ',
		'ᾧ': 'ᾯ',
		'ᾨ': 'ᾨ',
		'ᾩ': 'ᾩ',
		'ᾪ': 'ᾪ',
		'ᾫ': 'ᾫ',
		'ᾬ': 'ᾬ',
		'ᾭ': 'ᾭ',
		'ᾮ': 'ᾮ',
		'ᾯ': 'ᾯ',
		'ᾲ': 'ᾲ',
		'ᾳ': 'ᾼ',
		'ᾴ': 'ᾴ',
		'ᾶ': 'ᾶ',
		'ᾷ': 'ᾷ',
		'ᾼ': 'ᾼ',
		'ῂ': 'ῂ',
		'ῃ': 'ῌ',
		'ῄ': 'ῄ',
		'ῆ': 'ῆ',
		'ῇ': 'ῇ',
		'ῌ': 'ῌ',
		'ῒ': 'ῒ',
		'ΐ': 'ΐ',
		'ῖ': 'ῖ',
		'ῗ': 'ῗ',
		'ῢ': 'ῢ',
		'ΰ': 'ΰ',
		'ῤ': 'ῤ',
		'ῦ': 'ῦ',
		'ῧ': 'ῧ',
		'ῲ': 'ῲ',
		'ῳ': 'ῼ',
		'ῴ': 'ῴ',
		'ῶ': 'ῶ',
		'ῷ': 'ῷ',
		'ῼ': 'ῼ',
		'ⅰ': 'ⅰ',
		'ⅱ': 'ⅱ',
		'ⅲ': 'ⅲ',
		'ⅳ': 'ⅳ',
		'ⅴ': 'ⅴ',
		'ⅵ': 'ⅵ',
		'ⅶ': 'ⅶ',
		'ⅷ': 'ⅷ',
		'ⅸ': 'ⅸ',
		'ⅹ': 'ⅹ',
		'ⅺ': 'ⅺ',
		'ⅻ': 'ⅻ',
		'ⅼ': 'ⅼ',
		'ⅽ': 'ⅽ',
		'ⅾ': 'ⅾ',
		'ⅿ': 'ⅿ',
		'ⓐ': 'ⓐ',
		'ⓑ': 'ⓑ',
		'ⓒ': 'ⓒ',
		'ⓓ': 'ⓓ',
		'ⓔ': 'ⓔ',
		'ⓕ': 'ⓕ',
		'ⓖ': 'ⓖ',
		'ⓗ': 'ⓗ',
		'ⓘ': 'ⓘ',
		'ⓙ': 'ⓙ',
		'ⓚ': 'ⓚ',
		'ⓛ': 'ⓛ',
		'ⓜ': 'ⓜ',
		'ⓝ': 'ⓝ',
		'ⓞ': 'ⓞ',
		'ⓟ': 'ⓟ',
		'ⓠ': 'ⓠ',
		'ⓡ': 'ⓡ',
		'ⓢ': 'ⓢ',
		'ⓣ': 'ⓣ',
		'ⓤ': 'ⓤ',
		'ⓥ': 'ⓥ',
		'ⓦ': 'ⓦ',
		'ⓧ': 'ⓧ',
		'ⓨ': 'ⓨ',
		'ⓩ': 'ⓩ',
		'ꞵ': 'Ꞵ',
		'ꞷ': 'Ꞷ',
		'ꭓ': 'Ꭓ',
		'ꭰ': 'Ꭰ',
		'ꭱ': 'Ꭱ',
		'ꭲ': 'Ꭲ',
		'ꭳ': 'Ꭳ',
		'ꭴ': 'Ꭴ',
		'ꭵ': 'Ꭵ',
		'ꭶ': 'Ꭶ',
		'ꭷ': 'Ꭷ',
		'ꭸ': 'Ꭸ',
		'ꭹ': 'Ꭹ',
		'ꭺ': 'Ꭺ',
		'ꭻ': 'Ꭻ',
		'ꭼ': 'Ꭼ',
		'ꭽ': 'Ꭽ',
		'ꭾ': 'Ꭾ',
		'ꭿ': 'Ꭿ',
		'ꮀ': 'Ꮀ',
		'ꮁ': 'Ꮁ',
		'ꮂ': 'Ꮂ',
		'ꮃ': 'Ꮃ',
		'ꮄ': 'Ꮄ',
		'ꮅ': 'Ꮅ',
		'ꮆ': 'Ꮆ',
		'ꮇ': 'Ꮇ',
		'ꮈ': 'Ꮈ',
		'ꮉ': 'Ꮉ',
		'ꮊ': 'Ꮊ',
		'ꮋ': 'Ꮋ',
		'ꮌ': 'Ꮌ',
		'ꮍ': 'Ꮍ',
		'ꮎ': 'Ꮎ',
		'ꮏ': 'Ꮏ',
		'ꮐ': 'Ꮐ',
		'ꮑ': 'Ꮑ',
		'ꮒ': 'Ꮒ',
		'ꮓ': 'Ꮓ',
		'ꮔ': 'Ꮔ',
		'ꮕ': 'Ꮕ',
		'ꮖ': 'Ꮖ',
		'ꮗ': 'Ꮗ',
		'ꮘ': 'Ꮘ',
		'ꮙ': 'Ꮙ',
		'ꮚ': 'Ꮚ',
		'ꮛ': 'Ꮛ',
		'ꮜ': 'Ꮜ',
		'ꮝ': 'Ꮝ',
		'ꮞ': 'Ꮞ',
		'ꮟ': 'Ꮟ',
		'ꮠ': 'Ꮠ',
		'ꮡ': 'Ꮡ',
		'ꮢ': 'Ꮢ',
		'ꮣ': 'Ꮣ',
		'ꮤ': 'Ꮤ',
		'ꮥ': 'Ꮥ',
		'ꮦ': 'Ꮦ',
		'ꮧ': 'Ꮧ',
		'ꮨ': 'Ꮨ',
		'ꮩ': 'Ꮩ',
		'ꮪ': 'Ꮪ',
		'ꮫ': 'Ꮫ',
		'ꮬ': 'Ꮬ',
		'ꮭ': 'Ꮭ',
		'ꮮ': 'Ꮮ',
		'ꮯ': 'Ꮯ',
		'ꮰ': 'Ꮰ',
		'ꮱ': 'Ꮱ',
		'ꮲ': 'Ꮲ',
		'ꮳ': 'Ꮳ',
		'ꮴ': 'Ꮴ',
		'ꮵ': 'Ꮵ',
		'ꮶ': 'Ꮶ',
		'ꮷ': 'Ꮷ',
		'ꮸ': 'Ꮸ',
		'ꮹ': 'Ꮹ',
		'ꮺ': 'Ꮺ',
		'ꮻ': 'Ꮻ',
		'ꮼ': 'Ꮼ',
		'ꮽ': 'Ꮽ',
		'ꮾ': 'Ꮾ',
		'ꮿ': 'Ꮿ',
		'ﬀ': 'ﬀ',
		'ﬁ': 'ﬁ',
		'ﬂ': 'ﬂ',
		'ﬃ': 'ﬃ',
		'ﬄ': 'ﬄ',
		'ﬅ': 'ﬅ',
		'ﬆ': 'ﬆ',
		'ﬓ': 'ﬓ',
		'ﬔ': 'ﬔ',
		'ﬕ': 'ﬕ',
		'ﬖ': 'ﬖ',
		'ﬗ': 'ﬗ'
	};
	mw.Title.phpCharToUpper = function ( chr ) {
		var mapped = toUpperMapping[ chr ];
		return mapped || chr.toUpperCase();
	};
}( mediaWiki ) );
