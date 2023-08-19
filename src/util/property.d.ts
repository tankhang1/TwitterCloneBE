declare interface User {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  image: string;
}
declare interface Post {
  id: number;
  content: string;
  image: string;
  numberReply: number;
  numberReTweet: number;
  numberLike: number;
  numberView: number;
  createAt: string;
  userId: number;
  user: User;
}
