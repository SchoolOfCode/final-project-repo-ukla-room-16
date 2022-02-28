import React, {useState, useEffect } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

        export default function tree () {
const [tree, setTree] = useState(false)


            constructor(props) {
                super(props);
                this.divRef = React.createRef();
            }

           
            
            useEffect (() => {
                this.family = new FamilyTree (this.divRef.current , {
                    nodes: this.props.nodes,

                    nodeBinding: {
                        field_0: "name",
                        img_0: "img"
                    }
                });
            }),[];

            render() {
                return (
                    <div id="tree" ref={this.divRef}></div>
                );
            }
        }