
// import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ck from '@ckeditor/ckeditor5-react';
import ClassicEditor from '../../../ckeditor5/build/ckeditor'
// import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
// import { SlashCommand } from 'ckeditor5-premium-features';

// import 'ckeditor5/ckeditor5.css';
// import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CustomEditor() {
    return (
        <ck.CKEditor
            editor={ ClassicEditor }
        //     config={
        //     {
        //         toolbar: {
        //             items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
        //         },
        //         plugins: [
        //             Bold, Essentials, Italic, Mention, Paragraph, Undo
        //             // Bold, Essentials, Italic, Mention, Paragraph, SlashCommand, Undo
        //         ],
        //         licenseKey: '<YOUR_LICENSE_KEY>',
        //         mention: {
        //             // Mention configuration
        //         },
        //         initialData: '<p>Hello from CKEditor 5 in React!</p>'
        //     }
        // }
        />
    );
}

export default CustomEditor;

//

// import * as ck from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '../../../ckeditor5/src/ckeditor'
//
//
// export default function CustomEditor(props: any) {
//     return (
//         <ck.CKEditor
//             // editor={ClassicEditor}
//             editor={ClassicEditor}
//             config={
//                 {
//                     // input your configurations..
//                 }
//             }
//             data={props.data}
//             onChange={props.onChange}
//         />
//     );
// }
