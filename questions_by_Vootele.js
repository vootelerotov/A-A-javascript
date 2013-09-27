// Recursion

function recursion_genome() {
	 "use strict";
	  var code = "def dna_molekuli_generaator(genoomi_loik,n):\n	if len(genoomi_loik) == n:\n		print(genoomi_loik)\n	else:\n		for nukleotiid in [\"A\",\"T\",\"C\",\"G\"]:\n			dna_molekuli_generaator(genoomi_loik  + nukleotiid,n)";
	  return pre(code);
	}