import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockForChange, frameMockForChangeWithId, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockForChangeWithId);
		sinon.stub(Model, 'find').resolves([frameMockWithId]);
		sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('Changing a frame', () => {
    it('Successfuly changed', async () => {
			const frameChanged = await frameModel.update('62cf1fc6498565d94eba52cd', frameMockForChange);
			expect(frameChanged).to.be.deep.equal(frameMockForChangeWithId);
		});

    it('_id not found to change', async () => {
			let errorToTest;
			try {
				await frameModel.update('IDERRADO', frameMockForChange);
			} catch (error: any) {
				errorToTest = error;
			}
			expect(errorToTest.message).to.be.eq('InvalidMongoId');
		});
  });

	describe('searching all frames', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.read();
			expect(framesFound).to.be.deep.equal([frameMockWithId]);
		});
	});

	describe('Changing a frame', () => {
    it('Successfuly delete', async () => {
			const frameDeleted = await frameModel.destroy('62cf1fc6498565d94eba52cd');
			expect(frameDeleted).to.be.deep.equal(frameMockForChangeWithId);
		});

    it('_id not found to change', async () => {
			let errorToTest;
			try {
				await frameModel.destroy('IDERRADO');
			} catch (error: any) {
				errorToTest = error;
			}
			expect(errorToTest.message).to.be.eq('InvalidMongoId');
		});
  });
});