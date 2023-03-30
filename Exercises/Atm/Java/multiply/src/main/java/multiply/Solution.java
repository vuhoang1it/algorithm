package multiply;
public class Solution {
	//TODO : please run Java 11
	public int[] multiplySolution(int[] n) {
		var results = new int[n.length];

		//tempNumber must be 1 for multiplication or 0 for addition
		var tempNumber = 1;

		//number[i] = p(0,i - 1) * p(i+1,n.length - 1)

		//left pass
		for(var i = 0 ; i < n.length ; i++){
			results[i] = tempNumber;
			tempNumber = tempNumber * n[i];
		}

		tempNumber = 1;

		//right pass
		for(var i = n.length - 1 ; i >= 0; i--){
			results[i] = results[i] * tempNumber;
			tempNumber = tempNumber * n[i];
		}

		return results;
	}
}
