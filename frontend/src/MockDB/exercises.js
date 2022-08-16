const data = [
    {
        title: "Valid Braces",
        explanation: `
        <p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.</p>
        <p>This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.</p>
        <p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.</p>
        <b>What is considered Valid?</b>
        <p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
        `,
        examples: `
        <p>'(){}[]'   =>  True</p>
        <p>'([{}])'   =>  True</p>
        <p>'(}'       =>  False</p>
        <p>'[(])'     =>  False</p>
        <p>'[({})](]' =>  False</p>
        `,
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/5277c8a221e209d3f6000b56'
        }
    },
    {
        title: "First non-repeating character",
        explanation: `<p>Write a function named <code>first_non_repeating_letter</code> that takes a string input, and returns the first character that is not repeated anywhere in the string.</p>
        <p>For example, if given the input <code>'stress'</code>, the function should return <code>'t'</code>, since the letter <em>t</em> only occurs once in the string, and occurs first in the string.</p>
        <p>As an added challenge, upper- and lowercase letters are considered the <strong>same character</strong>, but the function should return the correct case for the initial letter.  For example, the input <code>'sTreSS'</code> should return <code>'T'</code>.</p>
        <p>If a string contains <em>all repeating characters</em>, it should return an empty string (<code>""</code>) or <code>None</code> -- see sample tests.</p>
        `,
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e'
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
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/513e08acc600c94f01000001'
        }
    },
    {
        title: "Duplicate Encoder",
        explanation: `<p>The goal of this exercise is to convert a string to a new string where each character in the new string is <code>"("</code> if that character appears only once in the original string, or <code>")"</code> if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.</p>`,
        examples: `<p>"din"      =>  "((("</p>
        <p>"recede"   =>  "()()()"</p>
        <p>"Success"  =>  ")())())"</p>
        <p>"(( @"     =>  "))((" </p>`,
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/54b42f9314d9229fd6000d9c'
        }
    },
    {
        title: "Valid Braces",
        explanation: `<p>test test test</p>`
    },
    {
        title: "Counter",
        explanation: `<p>test test test</p>`
    },
    {
        title: "Double Coder",
        explanation: `<p>test test test</p>`
    },
    {
        title: "Valid Braces",
        explanation: `<p>test test test</p>`
    },
    {
        title: "Counter",
        explanation: `<p>test test test</p>`
    },
    {
        title: "Valid Braces",
        explanation: `
        <p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.</p>
        <p>This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.</p>
        <p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.</p>
        <b>What is considered Valid?</b>
        <p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
        `,
        examples: `
        <p>'(){}[]'   =>  True</p>
        <p>'([{}])'   =>  True</p>
        <p>'(}'       =>  False</p>
        <p>'[(])'     =>  False</p>
        <p>'[({})](]' =>  False</p>
        `,
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/5277c8a221e209d3f6000b56'
        }
    },
    {
        title: "LONG LONG First non-repeating character",
        explanation: `<p>Write a function named <code>first_non_repeating_letter</code> that takes a string input, and returns the first character that is not repeated anywhere in the string.</p>
        <p>For example, if given the input <code>'stress'</code>, the function should return <code>'t'</code>, since the letter <em>t</em> only occurs once in the string, and occurs first in the string.</p>
        <p>As an added challenge, upper- and lowercase letters are considered the <strong>same character</strong>, but the function should return the correct case for the initial letter.  For example, the input <code>'sTreSS'</code> should return <code>'T'</code>.</p>
        <p>If a string contains <em>all repeating characters</em>, it should return an empty string (<code>""</code>) or <code>None</code> -- see sample tests.</p>
        <p>Write a function named <code>first_non_repeating_letter</code> that takes a string input, and returns the first character that is not repeated anywhere in the string.</p>
        <p>For example, if given the input <code>'stress'</code>, the function should return <code>'t'</code>, since the letter <em>t</em> only occurs once in the string, and occurs first in the string.</p>
        <p>As an added challenge, upper- and lowercase letters are considered the <strong>same character</strong>, but the function should return the correct case for the initial letter.  For example, the input <code>'sTreSS'</code> should return <code>'T'</code>.</p>
        <p>If a string contains <em>all repeating characters</em>, it should return an empty string (<code>""</code>) or <code>None</code> -- see sample tests.</p>
        <p>Write a function named <code>first_non_repeating_letter</code> that takes a string input, and returns the first character that is not repeated anywhere in the string.</p>
        <p>For example, if given the input <code>'stress'</code>, the function should return <code>'t'</code>, since the letter <em>t</em> only occurs once in the string, and occurs first in the string.</p>
        <p>As an added challenge, upper- and lowercase letters are considered the <strong>same character</strong>, but the function should return the correct case for the initial letter.  For example, the input <code>'sTreSS'</code> should return <code>'T'</code>.</p>
        <p>If a string contains <em>all repeating characters</em>, it should return an empty string (<code>""</code>) or <code>None</code> -- see sample tests.</p>
        `,
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e'
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
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/513e08acc600c94f01000001'
        }
    },
    {
        title: "Duplicate Encoder",
        explanation: `<p>The goal of this exercise is to convert a string to a new string where each character in the new string is <code>"("</code> if that character appears only once in the original string, or <code>")"</code> if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.</p>`,
        examples: `<p>"din"      =>  "((("</p>
        <p>"recede"   =>  "()()()"</p>
        <p>"Success"  =>  ")())())"</p>
        <p>"(( @"     =>  "))((" </p>`,
        source: {
            short: 'codewars',
            url: 'https://www.codewars.com/kata/54b42f9314d9229fd6000d9c'
        }
    },
]

export default data