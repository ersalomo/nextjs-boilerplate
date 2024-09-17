

export type PostReq = {
  title: string;
  content: string;
  postTags: string | string[];
  categoryId: string;
  published: number | string;
  authorId?: string; // di hapus karena ini di kirim menggunakan token dari header // sekarang lagi dev jadi ada dulu
};

