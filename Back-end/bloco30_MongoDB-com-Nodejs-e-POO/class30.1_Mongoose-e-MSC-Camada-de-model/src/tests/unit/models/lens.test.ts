import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockForChangeWithId, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a lens', () => {
		it('successfully created', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

  describe('searching a lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });
  });

  it('_id not found', async () => {
    try {
      await lensModel.readOne('123ERRADO');
    } catch (error: any) {
      expect(error.message).to.be.eq('InvalidMongoId');
    }
  });

  describe('searching all lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.read();
			expect(lensFound).to.be.deep.equal([lensMockWithId]);
		});
	});

  describe('Changing a frame', () => {
    it('Successfuly delete', async () => {
			const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
			expect(lensDeleted).to.be.deep.equal(lensMockForChangeWithId);
		});

    it('_id not found to change', async () => {
			let errorToTest;
			try {
				await lensModel.destroy('IDERRADO');
			} catch (error: any) {
				errorToTest = error;
			}
			expect(errorToTest.message).to.be.eq('InvalidMongoId');
		});
  });
});