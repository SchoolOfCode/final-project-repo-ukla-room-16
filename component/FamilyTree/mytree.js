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
        var family = new FamilyTree(document.getElementById('tree'), {
            mouseScrool: FamilyTree.none,
            mode: 'light',
            template: 'hugo',
            roots: [3],
            nodeMenu: {
                edit: { text: 'Edit' },
                details: { text: 'Details' },
            },
            nodeTreeMenu: true,
            nodeBinding: {
                field_0: 'name',
                //field_1: 'born',
                img_0: 'photo'
            },
            editForm: {
                titleBinding: "name",
                photoBinding: "photo",
                addMoreBtn: 'Add element',
                addMore: 'Add more elements',
                addMoreFieldName: 'Element name',
                generateElementsFromFields: false,
                elements: [
                    { type: 'textbox', label: 'Full Name', binding: 'name' },
                    { type: 'textbox', label: 'Email Address', binding: 'email' },
                    [
                        { type: 'textbox', label: 'Phone', binding: 'phone' },
                        { type: 'date', label: 'Date Of Birth', binding: 'born' }
                    ],
                    [
                       // { type: 'select', options: [{ value: 'bg', text: 'Bulgaria' }, { value: 'ru', text: 'Russia' }, { value: 'gr', text: 'Greece' }], label: 'Country', binding: 'country' },
                        { type: 'textbox', label: 'Address', binding: 'Address' },
                    ],
                    { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
                ]
            },
        });
        
        family.on('field', function (sender, args) {
            if (args.name == 'born') {
                var date = new Date(args.value);
                args.value = date.toLocaleDateString();
            }
        });
        
        family.load(

            // ourData

            [
                { id: 2, pids: [3], gender: 'male', photo:'https://cdn.balkan.app/shared/w60/1.jpg', name:'Rowan Annable', born: '1952-10-10' },
                { id: 3, pids: [2], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', name: 'Laura Shepherd', born: '1943-01-13', email: 'laura.shepherd@gmail.com', phone: '+44 845 5752 547', city: 'Moscow', country: 'ru' },
                { id: 4, pids: [5], photo: 'https://cdn.balkan.app/shared/m60/3.jpg', name: 'Rowan Annable' },
                { id: 5, pids: [4], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/3.jpg', name: 'Lois Sowle' },
                { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', photo: 'https://cdn.balkan.app/shared/w30/1.jpg', name: 'Tyler Heath', born: '1975-11-12' },
                { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male', photo: 'https://cdn.balkan.app/shared/m30/3.jpg', name: 'Samson Stokes', born: '1986-10-01' },
                { id: 8, pids: [9], mid: 7, fid: 6, gender: 'female', photo: 'https://cdn.balkan.app/shared/w10/3.jpg', name: 'Celeste Castillo', born: '2021-02-01' },
                { id: 9, pids: [8], gender: 'male', photo: '', name: 'john', born: '2021-02-01' }
           
            ]
        );
        
    }
    
    render() {
       
        
        return (
            <div id="tree" ref={this.divRef}></div>
           

        );
    }
}


// export const ourData = 


//  [
//                 { id: 2, pids: [3], gender: 'male', name:'Rowan Annable', born: '1952-10-10' },
//                 { id: 3, pids: [2], gender: 'female',name: 'Laura Shepherd', born: '1943-01-13'},
//                 { id: 4, pids: [5],  name: 'Rowan Annable' },
//                 { id: 5, pids: [4], gender: 'female', name: 'Lois Sowle' },
//                 { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', name: 'Tyler Heath', born: '1975-11-12'},
//                 { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male',  name: 'Samson Stokes', born: '1986-10-01'},
//                 { id: 8, pids: [9], mid: 7, fid: 6, gender: 'female', name: 'Celeste Castillo', born: '2021-02-01' },
//                 { id: 9, pids: [8], gender: 'male', name: 'john', born: '2021-02-01' }
           
//             ]




















// [
//     { id: 1,
//       name: "Crime and Punishment",
//       email: "abcee@gmail.com",
//       gender: "male",
//       pids: [2]
//     },
//     { id: 2,
//         name: "Crime and Punishment",
//         email: "abcee@gmail.com",
//         gender: "female",
//         pids: [1]
//       },
//     {
//       id: 3,  
//       name: "Harry Potter",
//       email: "abc@gmail.com",
//       gender: "male",
//       pids: [4],
//       fid: 1,
//       mid: 2
//     },
//     { id: 4,
//       name: "Clean Bandit",
//       email: "abbc@gmail.com",
//       gender: "male",
//       pids: [3],
//     },
//     { id: 5,
//       name: "Anna Marie",
//       email: "abcc@gmail.com",
//       gender: "male",
//       mid: 3,
//       fid:4,
//     },
//     { id: 6,
//       name: "Rivers of London",
//       email: "abcdd@gmail.com",
//       gender: "male",
//       mid: 3,
//       fid: 4,
//     },
// { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male',  name: 'Samson Stokes', born: '1986-10-01'},
// { id: 8, pids: [9], mid: 7, fid: 6, gender: 'female', name: 'Celeste Castillo', born: '2021-02-01' },
// { id: 9, pids: [8], gender: 'male', name: 'john', born: '2021-02-01' }
//   ];