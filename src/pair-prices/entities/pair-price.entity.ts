import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PairPrice {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pair: string

    @Column({ type: 'float' })
    price: number

    @Column({ type: 'float' })
    cost: number

    @Column({ type: 'float' })
    remaining: number

    @CreateDateColumn({ 
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date

    @UpdateDateColumn({ 
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date

    @Column({ default: true })
    active: boolean
}
