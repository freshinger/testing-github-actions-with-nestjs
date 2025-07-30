import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./services/app.service";

@Module({
    controllers: [AppController],
    providers: [AppService]
})
class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3232);
    console.log(`Server is running on port ${await app.getUrl()}`);
}

bootstrap();