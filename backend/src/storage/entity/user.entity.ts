import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public login: string;

  @Column()
  public password: string;

  @Column()
  public email: string;

  @Column()
  public role: string;
}
