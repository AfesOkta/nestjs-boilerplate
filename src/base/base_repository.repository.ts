import { Repository, DataSource, DeepPartial, ObjectLiteral } from 'typeorm';

export class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
  constructor(entity: new () => T, dataSource: DataSource) {
    super(entity, dataSource.createEntityManager());
  }

  async findAll(): Promise<T[]> {
    return this.find();
  }

  async findById(id: number): Promise<T | null> {
    return this.findOne({ where: { id } as any });
  }

  async createEntity(data: DeepPartial<T>): Promise<T> {
    const entity = this.create(data); // Menggunakan DeepPartial<T>
    return this.save(entity); // Mengembalikan entitas setelah disimpan
  }

  async updateEntity(id: number, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findById(id);
    if (!entity) {
      return null;
    }
    Object.assign(entity, data); // Menggabungkan data baru dengan entitas lama
    return this.save(entity);
  }

  async deleteEntity(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
