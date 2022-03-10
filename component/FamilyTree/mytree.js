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
    var family = new FamilyTree(document.getElementById("tree"), {
      mouseScrool: FamilyTree.none,
      mode: "light",
      template: "hugo",
      //STARTING POINT OF THE FAMILY TREE
      nodes: this.props.nodes,
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

    family.on("field", function (sender, args) {
      if (args.name == "born") {
        var date = new Date(args.value);
        args.value = date.toLocaleDateString();
      }
    });
    family.load(this.props.nodes);
  }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}

// export const ourData = [
//     { id: 1,
//       name: "Marinette avatar",
//       gender: "female",
//       pids: [2],
//       picture: "https://i.ibb.co/Xkq20hk/gm1.png"
//     },
//     { id: 2,
//         name: "Anthony Avatar",
//         gender: "male",
//         pids: [1],
//         picture: "https://i.ibb.co/HpVr5Zj/gp1.png"
//       },
//       { id: 4,
//         name: "Rosemary Profil",
//         gender: "female",
//         pids: [3],
//         fid: 1,
//         mid: 2,
//         picture: "https://i.ibb.co/njSvtN8/m1.png"
//       },
//     { id: 3,
//       name: "Tim Profil",
//       gender: "male",
//       pids: [4],
//       picture: 'https://i.ibb.co/SNKn7b8/f1.png',
//     //   fid: 1,
//     //   mid: 2,
//     },
//     { id: 5,
//       name: "Marie Profil",
//       gender: "female",
//       picture: 'https://i.ibb.co/ccSq7Kq/g1.png',
//       mid: 3,
//       fid:4,
//     },
//     { id: 6,
//       name: "Justin Profil",
//       gender: "male",
//       mid: 3,
//       fid: 4,
//       picture: "https://i.ibb.co/p2wdFvt/b1.png"
//     },
// ]

// { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male',  name: 'Samson Stokes', born: '1986-10-01'},
// { id: 8, pids: [9], mid: 7, fid: 6, gender: 'female', name: 'Celeste Castillo', born: '2021-02-01' },
// { id: 9, pids: [8], gender: 'male', name: 'john', born: '2021-02-01' }
//   ];

//ID, NAME, FID, MID, PIDS

// export const ourData = [
//   {
//     id: 12,
//     name: "great Annable",
//   },
//   {
//     id: 2,
//     pids: [3],
//     fid: 12,
//     name: "Hello Annable",
//   },
//   {
//     id: 3,
//     pids: [2],
//     name: "Laura Shepherd",
//   },
//   { id: 4, pids: [5], name: "Rowan Annable" },
//   { id: 5, pids: [4], name: "Lois Sowle" },
//   {
//     id: 6,
//     mid: 2,
//     fid: 3,
//     pids: [7],
//     name: "Tyler Heath",
//   },
//   {
//     id: 7,
//     pids: [6],
//     mid: 5,
//     fid: 4,
//     name: "Samson Stokes",
//   },
//   {
//     id: 8,
//     pids: [9],
//     mid: 7,
//     fid: 6,
//     name: "Celeste Castillo",
//   },
//   { id: 9, pids: [8], name: "john" },
// ];

//ID, NAME, FID, MID, PIDS
