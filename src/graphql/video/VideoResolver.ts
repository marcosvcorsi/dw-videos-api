import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import VideoSchema from "../../models/VideoSchema";
import Video from "./Video";

@InputType()
class VideoInput {
  @Field()
  description: string;
  
  @Field()
  name: string;
}

@Resolver(Video)
class VideoResolver {

  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();

    return videos;
  }

  @Mutation(() => Video)
  async createVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput as Video);

    return video;
  }
}

export default VideoResolver;