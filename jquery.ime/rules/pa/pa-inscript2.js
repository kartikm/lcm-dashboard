( function ( $ ) {
	'use strict';

	var paInScript2 = {
		id: 'pa-inscript2',
		name: 'Punjabi InScript2',
		description: 'Enhanced InScript keyboard for Punjabi script',
		date: '2013-11-14',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['1', '੧'],
			['2', '੨'],
			['3', '੩'],
			['4', '੪'],
			['5', '੫'],
			['6', '੬'],
			['7', '੭'],
			['8', '੮'],
			['9', '੯'],
			['0', '੦'],
			['\\(', '('],
			['\\)', ')'],
			['\\_', 'ਃ'],
			['\\-', '-'],
			['Q', 'ਔ'],
			['q', 'ੌ'],
			['W', 'ਐ'],
			['w', 'ੈ'],
			['E', 'ਆ'],
			['e', 'ਾ'],
			['R', 'ਈ'],
			['r', 'ੀ'],
			['T', 'ਊ'],
			['t', 'ੂ'],
			['Y', 'ਭ'],
			['y', 'ਬ'],
			['U', 'ਙ'],
			['u', 'ਹ'],
			['I', 'ਘ'],
			['i', 'ਗ'],
			['O', 'ਧ'],
			['o', 'ਦ'],
			['P', 'ਝ'],
			['p', 'ਜ'],
			['\\{', 'ਢ'],
			['\\[', 'ਡ'],
			['\\}', 'ਞ'],
			['\\]', '਼'],
			['A', 'ਓ'],
			['a', 'ੋ'],
			['S', 'ਏ'],
			['s', 'ੇ'],
			['D', 'ਅ'],
			['d', '੍'],
			['F', 'ਇ'],
			['f', 'ਿ'],
			['G', 'ਉ'],
			['g', 'ੁ'],
			['H', 'ਫ'],
			['h', 'ਪ'],
			['J', 'ੜ'],
			['j', 'ਰ'],
			['K', 'ਖ'],
			['k', 'ਕ'],
			['L', 'ਥ'],
			['l', 'ਤ'],
			[':', 'ਛ'],
			[';', 'ਚ'],
			['"', 'ਠ'],
			['\\\'', 'ਟ'],
			['X', 'ਂ'],
			['x', 'ੰ'],
			['C', 'ਣ'],
			['c', 'ਮ'],
			['v', 'ਨ'],
			['B', 'ਞ'],
			['b', 'ਵ'],
			['N', 'N'],
			['n', 'ਲ'],
			['M', 'ਸ਼'],
			['m', 'ਸ'],
			[',', ','],
			['\\>', '।'],
			['\\.', '.'],
			['/', 'ਯ']
		],
		patterns_x: [
			['1', '‍'],
			['2', '‌'],
			['4', '₹'],
			['i', 'ਗ਼'],
			['p', 'ਜ਼'],
			['\\[', 'ੜ'],
			['D', '☬'],
			['d', 'ੑ'],
			['F', 'ੲ'],
			['G', 'ੳ'],
			['H', 'ਫ਼'],
			['K', 'ਖ਼'],
			['X', 'ੴ'],
			['x', 'ਁ'],
			['N', 'ਲ਼'],
			['\\.', '॥'],
			['/', 'ੵ']
		]
	};
	$.ime.register( paInScript2 );

}( jQuery ) );
