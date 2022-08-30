//https://hindityping.info/converter/text-to-html/

const data = [
    {
        title: "Valid Braces",
        explanation: `<p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.</p><p>This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.</p><p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.</p><b>What is considered Valid?</b><p>A string of braces is considered valid if all braces are matched with the correct brace.</p>`,
        examples: `<p>'(){}[]'   =>  True</p><p>'([{}])'   =>  True</p><p>'(}'       =>  False</p><p>'[(])'     =>  False</p><p>'[({})](]' =>  False</p>`,
        source_short: 'codewars',
        source_url: 'https://www.codewars.com/kata/5277c8a221e209d3f6000b56',
        input_example: '{[()]}',
        input_type: 'str',
        answer: `
        <pre><code class="mb-5px" data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">validBraces</span>(<span class="cm-def">braces</span>){
            <span class="cm-keyword">let</span> <span class="cm-def">count</span> <span class="cm-operator">=</span> [<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>];
            <span class="cm-keyword">let</span> <span class="cm-def">stat</span> <span class="cm-operator">=</span> [];
            <span class="cm-keyword">let</span> <span class="cm-def">fail</span> <span class="cm-operator">=</span> <span class="cm-atom">false</span>;
            <span class="cm-keyword">let</span> <span class="cm-def">arr</span> <span class="cm-operator">=</span> <span class="cm-variable-2">braces</span>.<span class="cm-property">split</span>(<span class="cm-string">''</span>);
            
            <span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">v</span> <span class="cm-keyword">of</span> <span class="cm-variable-2">arr</span>) {
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">v</span> <span class="cm-operator">===</span> <span class="cm-string">'('</span> ){<span class="cm-variable-2">count</span>[<span class="cm-number">0</span>]<span class="cm-operator">++</span>; <span class="cm-variable-2">stat</span>.<span class="cm-property">push</span>(<span class="cm-string">'1'</span>)};
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">v</span> <span class="cm-operator">===</span> <span class="cm-string">'['</span> ){<span class="cm-variable-2">count</span>[<span class="cm-number">1</span>]<span class="cm-operator">++</span>; <span class="cm-variable-2">stat</span>.<span class="cm-property">push</span>(<span class="cm-string">'2'</span>)};
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">v</span> <span class="cm-operator">===</span> <span class="cm-string">'{'</span> ){<span class="cm-variable-2">count</span>[<span class="cm-number">2</span>]<span class="cm-operator">++</span>; <span class="cm-variable-2">stat</span>.<span class="cm-property">push</span>(<span class="cm-string">'3'</span>)};
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">v</span> <span class="cm-operator">===</span> <span class="cm-string">')'</span> ){
                    <span class="cm-keyword">if</span> (<span class="cm-variable-2">count</span>[<span class="cm-number">0</span>]<span class="cm-operator">&gt;</span><span class="cm-number">0</span> <span class="cm-operator">&amp;&amp;</span> <span class="cm-variable-2">stat</span>[<span class="cm-variable-2">stat</span>.<span class="cm-property">length</span><span class="cm-operator">-</span><span class="cm-number">1</span>]<span class="cm-operator">==</span><span class="cm-string">'1'</span>){<span class="cm-variable-2">count</span>[<span class="cm-number">0</span>]<span class="cm-operator">--</span>; <span class="cm-variable-2">stat</span>.<span class="cm-property">pop</span>()}<span class="cm-keyword">else</span>{<span class="cm-variable-2">fail</span><span class="cm-operator">=</span><span class="cm-atom">true</span>; <span class="cm-keyword">break</span>}
                  };
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">v</span> <span class="cm-operator">===</span> <span class="cm-string">']'</span> ){
                    <span class="cm-keyword">if</span> (<span class="cm-variable-2">count</span>[<span class="cm-number">1</span>]<span class="cm-operator">&gt;</span><span class="cm-number">0</span> <span class="cm-operator">&amp;&amp;</span> <span class="cm-variable-2">stat</span>[<span class="cm-variable-2">stat</span>.<span class="cm-property">length</span><span class="cm-operator">-</span><span class="cm-number">1</span>]<span class="cm-operator">===</span><span class="cm-string">'2'</span>){<span class="cm-variable-2">count</span>[<span class="cm-number">1</span>]<span class="cm-operator">--</span>; <span class="cm-variable-2">stat</span>.<span class="cm-property">pop</span>()}<span class="cm-keyword">else</span>{<span class="cm-variable-2">fail</span><span class="cm-operator">=</span><span class="cm-atom">true</span>; <span class="cm-keyword">break</span>}
                  };
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">v</span> <span class="cm-operator">===</span> <span class="cm-string">'}'</span> ){
                    <span class="cm-keyword">if</span> (<span class="cm-variable-2">count</span>[<span class="cm-number">2</span>]<span class="cm-operator">&gt;</span><span class="cm-number">0</span> <span class="cm-operator">&amp;&amp;</span> <span class="cm-variable-2">stat</span>[<span class="cm-variable-2">stat</span>.<span class="cm-property">length</span><span class="cm-operator">-</span><span class="cm-number">1</span>]<span class="cm-operator">===</span><span class="cm-string">'3'</span>){<span class="cm-variable-2">count</span>[<span class="cm-number">2</span>]<span class="cm-operator">--</span>; <span class="cm-variable-2">stat</span>.<span class="cm-property">pop</span>()}<span class="cm-keyword">else</span>{<span class="cm-variable-2">fail</span><span class="cm-operator">=</span><span class="cm-atom">true</span>; <span class="cm-keyword">break</span>}
                  };
            }
          
            <span class="cm-keyword">if</span> (<span class="cm-variable-2">count</span>[<span class="cm-number">0</span>]<span class="cm-operator">===</span><span class="cm-number">0</span> <span class="cm-operator">&amp;&amp;</span> <span class="cm-variable-2">count</span>[<span class="cm-number">1</span>]<span class="cm-operator">===</span><span class="cm-number">0</span> <span class="cm-operator">&amp;&amp;</span> <span class="cm-variable-2">count</span>[<span class="cm-number">2</span>]<span class="cm-operator">===</span><span class="cm-number">0</span> <span class="cm-operator">&amp;&amp;</span> <span class="cm-operator">!</span><span class="cm-variable-2">fail</span>) {<span class="cm-keyword">return</span> <span class="cm-atom">true</span>} <span class="cm-keyword">else</span>{<span class="cm-keyword">return</span> <span class="cm-atom">false</span>}
        };</code></pre>
        `,
        arg: 'braces',
        code: `let count = [0,0,0];
        let stat = [];
        let fail = false;
        let arr = braces.split('');
        
        for (let v of arr) {
              if (v === '(' ){count[0]++; stat.push('1')};
              if (v === '[' ){count[1]++; stat.push('2')};
              if (v === '{' ){count[2]++; stat.push('3')};
              if (v === ')' ){
                if (count[0]>0 && stat[stat.length-1]=='1'){count[0]--; stat.pop()}else{fail=true; break}
              };
              if (v === ']' ){
                if (count[1]>0 && stat[stat.length-1]==='2'){count[1]--; stat.pop()}else{fail=true; break}
              };
              if (v === '}' ){
                if (count[2]>0 && stat[stat.length-1]==='3'){count[2]--; stat.pop()}else{fail=true; break}
              };
        }
      
        if (count[0]===0 && count[1]===0 && count[2]===0 && !fail) {return true} else{return false}`,
        hardcode(braces) {
            let count = [0,0,0];
            let stat = [];
            let fail = false;
            let arr = braces.split('');
            
            for (let v of arr) {
                  if (v === '(' ){count[0]++; stat.push('1')};
                  if (v === '[' ){count[1]++; stat.push('2')};
                  if (v === '{' ){count[2]++; stat.push('3')};
                  if (v === ')' ){
                    if (count[0]>0 && stat[stat.length-1]=='1'){count[0]--; stat.pop()}else{fail=true; break}
                  };
                  if (v === ']' ){
                    if (count[1]>0 && stat[stat.length-1]==='2'){count[1]--; stat.pop()}else{fail=true; break}
                  };
                  if (v === '}' ){
                    if (count[2]>0 && stat[stat.length-1]==='3'){count[2]--; stat.pop()}else{fail=true; break}
                  };
            }
          
            if (count[0]===0 && count[1]===0 && count[2]===0 && !fail) {return true} else{return false}
        }
    },
    {
        title: "First non-repeating character",
        explanation: `<p>Write a function named <code>first_non_repeating_letter</code> that takes a string input, and returns the first character that is not repeated anywhere in the string.</p>
        <p>For example, if given the input <code>'stress'</code>, the function should return <code>'t'</code>, since the letter <em>t</em> only occurs once in the string, and occurs first in the string.</p>
        <p>As an added challenge, upper- and lowercase letters are considered the <strong>same character</strong>, but the function should return the correct case for the initial letter.  For example, the input <code>'sTreSS'</code> should return <code>'T'</code>.</p>
        <p>If a string contains <em>all repeating characters</em>, it should return an empty string (<code>""</code>) or <code>None</code> -- see sample tests.</p>
        `,
        source_short: 'codewars',
        source_url: 'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e',
        input_example: 'abcabd',
        input_type: 'str',
        answer: `
        <pre><code class="mb-5px" data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">firstNonRepeatingLetter</span>(<span class="cm-def">s</span>) {
            <span class="cm-variable">ns</span> <span class="cm-operator">=</span> <span class="cm-variable-2">s</span>.<span class="cm-property">toLowerCase</span>()
            <span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-variable-2">i</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">s</span>.<span class="cm-property">length</span>; <span class="cm-variable-2">i</span><span class="cm-operator">++</span>){
              <span class="cm-keyword">if</span> (<span class="cm-variable">ns</span>.<span class="cm-property">indexOf</span>(<span class="cm-variable">ns</span>[<span class="cm-variable-2">i</span>]) <span class="cm-operator">===</span> <span class="cm-variable">ns</span>.<span class="cm-property">lastIndexOf</span>(<span class="cm-variable">ns</span>[<span class="cm-variable-2">i</span>])) {<span class="cm-keyword">return</span> <span class="cm-variable-2">s</span>[<span class="cm-variable-2">i</span>]}
            }
            <span class="cm-keyword">return</span> <span class="cm-string">''</span>
          }</code></pre>
        `,
        arg: 's',
        code: `let ns = s.toLowerCase()
        for (let i = 0; i<s.length; i++){
          if (ns.indexOf(ns[i]) === ns.lastIndexOf(ns[i])) {return s[i]}
        }
        return 'all characters were repeated'`,
        hardcode(s) {
          let ns = s.toLowerCase()
          for (let i = 0; i<s.length; i++){
            if (ns.indexOf(ns[i]) === ns.lastIndexOf(ns[i])) {return s[i]}
          }
          return 'all characters were repeated'
        }
    },
    {
        title: "RGB To Hex Conversion",
        explanation: `<p>The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.</p>
        <p>Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.</p>
        `,
        examples: `<p>rgb(255, 255, 255) // returns FFFFFF</p>
        <p>rgb(255, 255, 300) // returns FFFFFF</p>
        <p>rgb(0,0,0) // returns 000000</p>
        <p>rgb(148, 0, 211) // returns 9400D3</p>`,
        source_short: 'codewars',
        source_url: 'https://www.codewars.com/kata/513e08acc600c94f01000001',
        input_example: '255, 255, 255',
        input_type: 'multi_str',
        answer: `
        <pre><code class="mb-5px" data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">rgb</span>(<span class="cm-def">r</span>, <span class="cm-def">g</span>, <span class="cm-def">b</span>){
            <span class="cm-keyword">let</span> <span class="cm-def">alpha</span> <span class="cm-operator">=</span> {
              <span class="cm-number cm-property">10</span>: <span class="cm-string">'A'</span>,
              <span class="cm-number cm-property">11</span>: <span class="cm-string">'B'</span>,
              <span class="cm-number cm-property">12</span>: <span class="cm-string">'C'</span>,
              <span class="cm-number cm-property">13</span>: <span class="cm-string">'D'</span>,
              <span class="cm-number cm-property">14</span>: <span class="cm-string">'E'</span>,
              <span class="cm-number cm-property">15</span>: <span class="cm-string">'F'</span>,
            };
            <span class="cm-keyword">let</span> <span class="cm-def">answer</span> <span class="cm-operator">=</span> <span class="cm-string">''</span>;
            <span class="cm-keyword">let</span> <span class="cm-def">arr</span> <span class="cm-operator">=</span> [<span class="cm-variable-2">r</span>, <span class="cm-variable-2">g</span>, <span class="cm-variable-2">b</span>]
        
            <span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">c</span> <span class="cm-keyword">of</span> <span class="cm-variable-2">arr</span>){
              <span class="cm-keyword">if</span> (<span class="cm-variable-2">c</span> <span class="cm-operator">&lt;</span> <span class="cm-number">0</span>) {<span class="cm-variable-2">answer</span> <span class="cm-operator">+=</span> <span class="cm-string">'00'</span>}
              <span class="cm-keyword">else</span> <span class="cm-keyword">if</span> (<span class="cm-variable-2">c</span> <span class="cm-operator">&gt;</span> <span class="cm-number">255</span>) {<span class="cm-variable-2">answer</span> <span class="cm-operator">+=</span> <span class="cm-string">'FF'</span>}
              <span class="cm-keyword">else</span> {
                <span class="cm-keyword">let</span> <span class="cm-def">first</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable-2">c</span><span class="cm-operator">/</span><span class="cm-number">16</span>);
                <span class="cm-keyword">let</span> <span class="cm-def">second</span> <span class="cm-operator">=</span> <span class="cm-variable-2">c</span><span class="cm-operator">-</span>(<span class="cm-variable-2">first</span><span class="cm-operator">*</span><span class="cm-number">16</span>);
                <span class="cm-keyword">if</span> (<span class="cm-variable-2">alpha</span>[<span class="cm-variable-2">first</span>]){<span class="cm-variable-2">first</span> <span class="cm-operator">=</span> <span class="cm-variable-2">alpha</span>[<span class="cm-variable-2">first</span>]}; 
                <span class="cm-keyword">if</span> (<span class="cm-variable-2">alpha</span>[<span class="cm-variable-2">second</span>]){<span class="cm-variable-2">second</span> <span class="cm-operator">=</span> <span class="cm-variable-2">alpha</span>[<span class="cm-variable-2">second</span>]}; 
                <span class="cm-variable-2">answer</span> <span class="cm-operator">+=</span> <span class="cm-string-2">\` \${</span><span class="cm-variable-2">first</span><span class="cm-string-2">}</span><span class="cm-string-2"> \${</span><span class="cm-variable-2">second</span><span class="cm-string-2">}</span><span class="cm-string-2">\`</span>; 
              }
            }
            <span class="cm-keyword">return</span> <span class="cm-variable-2">answer</span>
        } </code></pre>
        `,
        arg: "r, g, b",
        code: `let alpha = {
          10: 'A',
          11: 'B',
          12: 'C',
          13: 'D',
          14: 'E',
          15: 'F',
        };
        let answer = '';
        let arr = [r, g, b]
    
        for (let c of arr){
          if (c < 0) {answer += '00'}
          else if (c > 255) {answer += 'FF'}
          else {
            let first = Math.floor(c/16);
            let second = c-(first*16);
            if (alpha[first]){first = alpha[first]}; 
            if (alpha[second]){second = alpha[second]}; 
            first.toString();
            second.toString();
            answer += first; 
            answer += second; 
          }
        }
        
        return answer`,
        hardcode(r, g, b){
          let alpha = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
          };
          let answer = '';
          let arr = [r, g, b]
      
          for (let c of arr){
            if (c < 0) {answer += '00'}
            else if (c > 255) {answer += 'FF'}
            else {
              let first = Math.floor(c/16);
              let second = c-(first*16);
              if (alpha[first]){first = alpha[first]}; 
              if (alpha[second]){second = alpha[second]}; 
              first.toString();
              second.toString();
              answer += first; 
              answer += second; 
            }
          }
          
          return answer
      } 
    },
    {
        title: "Duplicate Encoder",
        explanation: `<p>The goal of this exercise is to convert a string to a new string where each character in the new string is <code>"("</code> if that character appears only once in the original string, or <code>")"</code> if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.</p>`,
        examples: `<p>"din"      =>  "((("</p>
        <p>"recede"   =>  "()()()"</p>
        <p>"Success"  =>  ")())())"</p>
        <p>"(( @"     =>  "))((" </p>`,
        source_short: 'codewars',
        source_url: 'https://www.codewars.com/kata/54b42f9314d9229fd6000d9c',
        input_example: 'millennia',
        input_type: 'str',
        answer: `
        <pre><code class="mb-5px" data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">duplicateEncode</span>(<span class="cm-def">word</span>){
            <span class="cm-keyword">return</span> <span class="cm-variable-2">word</span>
              .<span class="cm-property">toLowerCase</span>()
              .<span class="cm-property">split</span>(<span class="cm-string">''</span>)
              .<span class="cm-property">map</span>(
                (<span class="cm-def">v</span>,<span class="cm-def">i</span>,<span class="cm-def">a</span>)<span class="cm-operator">=&gt;</span>{
                  <span class="cm-keyword">if</span> (<span class="cm-variable-2">a</span>.<span class="cm-property">indexOf</span>(<span class="cm-variable-2">v</span>) <span class="cm-operator">==</span> <span class="cm-variable-2">a</span>.<span class="cm-property">lastIndexOf</span>(<span class="cm-variable-2">v</span>)) {<span class="cm-keyword">return</span> <span class="cm-string">'('</span> } <span class="cm-keyword">else</span> {<span class="cm-keyword">return</span> <span class="cm-string">')'</span>}
                }
              )
              .<span class="cm-property">join</span>(<span class="cm-string">''</span>)
        }</code></pre>
        `,
        arg: 'word',
        code: `return word
        .toLowerCase()
        .split('')
        .map(
          (v,i,a)=>{
            if (a.indexOf(v) == a.lastIndexOf(v)) {return '(' } else {return ')'}
          }
        )
        .join('')`,
        hardcode(word){
          return word
            .toLowerCase()
            .split('')
            .map(
              (v,i,a)=>{
                if (a.indexOf(v) == a.lastIndexOf(v)) {return '(' } else {return ')'}
              }
            )
            .join('')
      }
    },
    {
      title: "Find The Parity Outlier",
      explanation: `You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.`,
      examples: `
      <pre><code class="language-python">[<span class="cm-number">2</span>, <span class="cm-number">4</span>, <span class="cm-number">0</span>, <span class="cm-number">100</span>, <span class="cm-number">4</span>, <span class="cm-number">11</span>, <span class="cm-number">2602</span>, <span class="cm-number">36</span>]
<span class="cm-variable">Should</span> <span class="cm-keyword">return</span>: <span class="cm-number">11</span> (<span class="cm-variable">the</span> <span class="cm-variable">only</span> <span class="cm-variable">odd</span> <span class="cm-variable">number</span>)

[<span class="cm-number">160</span>, <span class="cm-number">3</span>, <span class="cm-number">1719</span>, <span class="cm-number">19</span>, <span class="cm-number">11</span>, <span class="cm-number">13</span>, <span class="cm-operator">-</span><span class="cm-number">21</span>]
<span class="cm-variable">Should</span> <span class="cm-keyword">return</span>: <span class="cm-number">160</span> (<span class="cm-variable">the</span> <span class="cm-variable">only</span> <span class="cm-variable">even</span> <span class="cm-variable">number</span>)</code></pre>
      `,
      source_short: 'codewars',
      source_url: 'https://www.codewars.com/kata/5526fc09a1bbd946250002dc',
      input_example: '2, 4, 0, 100, 4, 11, 2602, 36',
      input_type: 'arr',
      answer: `
      <pre><code class="mb-5px" data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">duplicateEncode</span>(<span class="cm-def">word</span>){
          <span class="cm-keyword">return</span> <span class="cm-variable-2">word</span>
            .<span class="cm-property">toLowerCase</span>()
            .<span class="cm-property">split</span>(<span class="cm-string">''</span>)
            .<span class="cm-property">map</span>(
              (<span class="cm-def">v</span>,<span class="cm-def">i</span>,<span class="cm-def">a</span>)<span class="cm-operator">=&gt;</span>{
                <span class="cm-keyword">if</span> (<span class="cm-variable-2">a</span>.<span class="cm-property">indexOf</span>(<span class="cm-variable-2">v</span>) <span class="cm-operator">==</span> <span class="cm-variable-2">a</span>.<span class="cm-property">lastIndexOf</span>(<span class="cm-variable-2">v</span>)) {<span class="cm-keyword">return</span> <span class="cm-string">'('</span> } <span class="cm-keyword">else</span> {<span class="cm-keyword">return</span> <span class="cm-string">')'</span>}
              }
            )
            .<span class="cm-property">join</span>(<span class="cm-string">''</span>)
      }</code></pre>
      `,
      arg: 'integers',
      code: `
      let odd = [];
        let even = [];
        for (let int of integers) {
          int % 2 === 0 ? even.push(int) : odd.push(int);
          
          if ((odd.length > 1) && (even.length > 0) ) {
            return even[0]
          } else if ((even.length > 1) && (odd.length > 0)) {
            return odd[0]
          };
        };
      `,
      hardcode(integers){
        let odd = [];
        let even = [];
        for (let int of integers) {
          int % 2 === 0 ? even.push(int) : odd.push(int);
          
          if ((odd.length > 1) && (even.length > 0) ) {
            return even[0]
          } else if ((even.length > 1) && (odd.length > 0)) {
            return odd[0]
          };
        };
      }
    },
    {
      title: "Repeat",
      explanation: `The examples below show you how to write function <code>accum</code>:`,
      examples: `<pre>
<code>accum("abcd") -&gt; "A-Bb-Ccc-Dddd"
accum("RqaEzty") -&gt; "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -&gt; "C-Ww-Aaa-Tttt"</code>
      </pre>
      `,
      source_short: 'codewars',
      source_url: 'https://www.codewars.com/kata/5667e8f4e3f572a8f2000039',
      input_example: 'RqaEzty',
      input_type: 'str',
      answer: `
      <pre><code class="mb-5px" data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">accum</span>(<span class="cm-def">s</span>) {
        <span class="cm-keyword">return</span> <span class="cm-variable-2">s</span>
          .<span class="cm-property">toLowerCase</span>()
          .<span class="cm-property">split</span>(<span class="cm-string">''</span>)
          .<span class="cm-property">map</span>((<span class="cm-def">v</span>,<span class="cm-def">i</span>,<span class="cm-def">a</span>)<span class="cm-operator">=&gt;</span>{
            <span class="cm-keyword">return</span> <span class="cm-string">''</span> <span class="cm-operator">+</span> <span class="cm-variable-2">v</span>.<span class="cm-property">toUpperCase</span>() <span class="cm-operator">+</span> <span class="cm-variable-2">v</span>.<span class="cm-property">repeat</span>(<span class="cm-variable-2">i</span>)
        }).<span class="cm-property">join</span>(<span class="cm-string">'-'</span>)
      }</code></pre>
      `,
      arg: 's',
      code: `
          return s
        .toLowerCase()
        .split('')
        .map((v,i,a)=>{
          return '' + v.toUpperCase() + v.repeat(i)
      }).join('-')
      `
    }
]

export default data