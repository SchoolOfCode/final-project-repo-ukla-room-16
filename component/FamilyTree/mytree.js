import React, { Component } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

export default class extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.family = new FamilyTree (this.divRef.current , {
            nodes: this.props.nodes,
            mouseScrool: FamilyTree.none,
            mode: "light",
            template: "hugo",
            //STARTING POINT OF THE FAMILY TREE
            // roots: [1],
            nodeMenu: {
              edit: { text: "Edit" },
              details: { text: "Details" },
            },
            nodeTreeMenu: true,
            nodeBinding: {
              field_0: "name",
              //field_1: 'born',
              img_0: "picture",
            },
            editForm: {
              titleBinding: "name",
              photoBinding: "picture",
              addMoreBtn: "Add element",
              addMore: "Add more elements",
              addMoreFieldName: "Element name",
              generateElementsFromFields: false,
              elements: [
                { type: "textbox", label: "Full Name", binding: "name" },
                { type: "textbox", label: "Email Address", binding: "email" },
                [
                  { type: "textbox", label: "Phone", binding: "phone" },
                  { type: "date", label: "Date Of Birth", binding: "born" },
                ],
                [
                  // { type: 'select', options: [{ value: 'bg', text: 'Bulgaria' }, { value: 'ru', text: 'Russia' }, { value: 'gr', text: 'Greece' }], label: 'Country', binding: 'country' },
                  { type: "textbox", label: "Address", binding: "Address" },
                ],
                {
                  type: "textbox",
                  label: "Photo Url",
                  binding: "picture",
                  btn: "Upload",
                },
              ],
            },
        });
    //     family.on("added")= async() => {
    //       const URL = process.env.NEXT_PUBLIC_URL;
    //       const postObj = {
    //         family_id: 1,
    //         profile_name: "hello",
    //         full_name: "hello",
    //         picture: "pic",
    //       }
    //         const res = await fetch(`${URL}/users`, {
    //           method: "POST",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify(postObj),
    //         });   
    // }
  }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}
