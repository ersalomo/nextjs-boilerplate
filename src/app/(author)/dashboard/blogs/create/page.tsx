// import CustomEditor from "../../../../../components/ckeditor/custom-editor";
"use client"

import dynamic from 'next/dynamic';
import {PostReq} from "../../../../../libs/models/model.index";
import {useForm} from "../../../../../libs/hooks/useForm";

const CustomEditor = dynamic( () => import( '@/components/ckeditor/custom-editor' ), { ssr: false } );
const CreateBlog = () => {
    const { form, onChangeValue } = useForm<PostReq>({
        title: '',
        content: '',
        postTags: '',
        categoryId: '',
        published: 0,
    });
    return(
        <>
            <CustomEditor
                data={''}
                onChange={(event: any, editor: any) => {
                    // console.log(editor.getData());
                    // form.content = editor.getData();
                }}
            />
        </>
    )

}

export default CreateBlog;