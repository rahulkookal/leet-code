package main

func productExceptSelf(nums []int) []int {
	length := len(nums)
	result := make([]int, length)

	// Compute left products
	result[0] = 1
	for i := 1; i < length; i++ {
		result[i] = result[i-1] * nums[i-1]
	}

	// Compute right products and update result
	R := 1
	for i := length - 1; i >= 0; i-- {
		result[i] *= R
		R *= nums[i]
	}

	return result
}
