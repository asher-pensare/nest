import { OmitType, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";

export class EditPostController extends PartialType(CreatePostDto){}
