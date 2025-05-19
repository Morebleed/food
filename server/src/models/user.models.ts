import {Schema, model, Model, models, } from "mongoose"

enum UserRoleEnum {
    ADMIN  = "Admin",
    USER = "User",
}

enum UserRoleEnumNum

type UserSchemaType = {
    email: string;
    password: string;
    phoneNumber: string;
    adress: string;
    role: UserRoleEnumNum;
    orderedFoods: Schema.Types.ObjectId;
    ttl: Date;
    isVerified: boolean;
    
};

const UserSchema = new Schema<UserSchemaType>({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, default: ""},
    isVerified: { type: Boolean, default: false },
    orderedFoods: [{ type: Schema.Types.ObjectId, ref: ""}],
    phoneNumber: { type: String },
    role: { type: String, enum: Object.values(UserRoleEnum), default: UserRoleEnum.USER },
    ttl: { type: Date, default: Date.now() + 24 * 60 * 60 * 1000 },
});

export const UserModel: Model<UserSchemaType> = models["User"] || model("user", UserSchema);