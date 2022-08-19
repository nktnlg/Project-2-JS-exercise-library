<p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.</p>
                            <p>This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.</p>
                            <p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.</p>
                            <b>What is considered Valid?</b>
                            <p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
                            <b>Examples:</b>
                            <Code w={'100%'} p={4}>
                                <p>rgb(255, 255, 255) // returns FFFFFF</p>
                                <p>rgb(255, 255, 300) // returns FFFFFF</p>
                                <p>rgb(0,0,0) // returns 000000</p>
                                <p>rgb(148, 0, 211) // returns 9400D3</p>
                                <p>"din"      =>  "((("</p>
                                <p>"recede"   =>  "()()()"</p>
                                <p>"Success"  =>  ")())())"</p>
                                <p>"(( @"     =>  "))((" </p>
                            </Code>
                            <Text>Source: <Link href='https://www.codewars.com/kata/5277c8a221e209d3f6000b56'>codewars</Link></Text>